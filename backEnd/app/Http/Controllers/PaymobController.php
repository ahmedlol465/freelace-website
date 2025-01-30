<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PaymobController extends Controller
{
    private $apiKey;
    private $integrationId;
    private $hMacSecret;
    private $merchantId;
    private $callbackUrl;
    private $returnUrl;
    private $errorUrl;


    public function __construct()
    {
        $this->apiKey = env('PAYMOB_API_KEY');
        $this->integrationId = env('PAYMOB_INTEGRATION_ID');
        $this->hMacSecret = env('PAYMOB_H_MAC_SECRET');
        $this->merchantId = env('PAYMOB_MERCHANT_ID');
        $this->callbackUrl = env('PAYMOB_PAYMENT_CALLBACK_URL');
        $this->returnUrl = env('PAYMOB_PAYMENT_RETURN_URL');
        $this->errorUrl = env('PAYMOB_PAYMENT_ERROR_URL');
    }


    public function getAuthToken()
    {
        try {
            $response = Http::post('https://accept.paymob.com/api/auth/tokens', [
                'api_key' => $this->apiKey,
            ]);

            if ($response->successful()) {
                return $response->json()['token'];
            } else {
                Log::error('Paymob Auth Token Error: ' . $response->body());
                return null; // Or throw an exception
            }
        } catch (\Exception $e) {
            Log::error('Paymob Auth Token Exception: ' . $e->getMessage());
            return null; // Or throw an exception
        }
    }

    public function createOrder(Request $request)
    {
        $authToken = $this->getAuthToken();
        if (!$authToken) {
            return response()->json(['error' => 'Failed to authenticate with Paymob'], 500);
        }


        $amountCents = $request->amount_cents * 100; // Amount in cents
        $orderData = [
            'auth_token' => $authToken,
            'delivery_needed' => 'false', // Set to 'true' if you need delivery options
            'amount_cents' => $amountCents,
            'currency' => 'EGP', // Change if needed
            'merchant_order_id' => uniqid(), // Generate a unique order ID in your system
            'items' => [], // Add order items if needed (optional)
            'shipping_data' => [ // Optional shipping data if delivery_needed is true
                "apartment" => "803",
                "floor" => "42",
                "street" => "Ethan Land",
                "building" => "Giza",
                "postal_code" => "01898",
                "city" => "Giza",
                "country" => "Egypt",
                "email" => "test@example.com", // Customer email
                "phone_number" => "01011111111", // Customer phone
                "first_name" => "John", // Customer first name
                "last_name" => "Doe", // Customer last name
            ],
            'billing_data' => [  // Billing data (can be same as shipping if not needed)
                "apartment" => "803",
                "floor" => "42",
                "street" => "Ethan Land",
                "building" => "Giza",
                "postal_code" => "01898",
                "city" => "Giza",
                "country" => "Egypt",
                "email" => "test@example.com",
                "phone_number" => "01011111111",
                "first_name" => "John",
                "last_name" => "Doe",
            ],
        ];

        try {
            $response = Http::post('https://accept.paymob.com/api/ecommerce/orders', $orderData);

            echo($response);
            if ($response->successful()) {
                return $response->json(); // Return the Paymob order data
            } else {
                Log::error('Paymob Create Order Error: ' . $response->body());
                return response()->json(['error' => 'Failed to create order with Paymob'], 500);
            }
        } catch (\Exception $e) {
            Log::error('Paymob Create Order Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to create order with Paymob'], 500);
        }
    }



    public function getPaymentKey(Request $request)
    {
        $authToken = $this->getAuthToken();
        if (!$authToken) {
            return response()->json(['error' => 'Failed to authenticate with Paymob'], 500);
        }

        $orderId = $request->order_id; // Get order_id from the frontend request
        $amountCents = $request->amount * 100;

        $paymentKeyData = [
            'auth_token' => $authToken,
            'amount_cents' => $amountCents,
            'expiration' => 3600, // Payment key expiration in seconds (1 hour)
            'order_id' => $orderId,
            'integration_id' => $this->integrationId,
            'billing_data' => [ // Re-send billing data (or you could store it from order creation)
                "apartment" => "803",
                "floor" => "42",
                "street" => "Ethan Land",
                "building" => "Giza",
                "postal_code" => "01898",
                "city" => "Giza",
                "country" => "Egypt",
                "email" => "test@example.com",
                "phone_number" => "01011111111",
                "first_name" => "John",
                "last_name" => "Doe",
            ],
            'currency' => 'EGP',
            'callback_url' => $this->callbackUrl,
            'return_url' => $this->returnUrl,
        ];

        try {
            $response = Http::post('https://accept.paymob.com/api/acceptance/payment_keys', $paymentKeyData);

            if ($response->successful()) {
                return $response->json(); // Return the payment key data
            } else {
                Log::error('Paymob Get Payment Key Error: ' . $response->body());
                return response()->json(['error' => 'Failed to get payment key from Paymob'], 500);
            }
        } catch (\Exception $e) {
            Log::error('Paymob Get Payment Key Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to get payment key from Paymob'], 500);
        }
    }

    public function paymentCallback(Request $request)
    {
        Log::info('Paymob Callback received: ' . json_encode($request->all()));

        // **IMPORTANT:  HMAC Signature Verification**
        $hmacString = '';
        $orderedKeys = [
            'amount_cents', 'created_at', 'currency', 'error_code', 'has_parent_transaction',
            'id', 'integration_id', 'is_auth', 'is_capture', 'is_refunded', 'is_standalone_payment',
            'is_voided', 'merchant_id', 'order_id', 'owner', 'parent_transaction', 'pending',
            'source_data_pan', 'source_data_sub_type', 'source_data_type', 'success',
        ];

        foreach ($orderedKeys as $key) {
            if ($request->has($key)) {
                $hmacString .= $key . '=' . $request->input($key) . '&';
            }
        }
        $hmacString = rtrim($hmacString, '&'); // Remove trailing '&'

        $calculatedHmac = hash_hmac('sha512', $hmacString, $this->hMacSecret);
        $receivedHmac = $request->input('hmac');

        if ($calculatedHmac !== $receivedHmac) {
            Log::error('Paymob Callback HMAC Verification Failed!');
            return response()->json(['error' => 'HMAC verification failed'], 400); // Or 403 Forbidden
        }

        // **Payment Status and Order Update Logic**
        if ($request->input('success') === 'true') {
            Log::info('Paymob Payment Successful - Order ID: ' . $request->input('order_id'));
            // **VERIFY PAYMENT AGAIN WITH PAYMOB API (Highly Recommended)**
            $verificationResult = $this->verifyPayment($request->input('transaction_id'));
            if ($verificationResult['is_valid']) {
                // Payment is verified and successful! Update your order status in your database
                // e.g., Order::where('paymob_order_id', $request->input('order_id'))->update(['payment_status' => 'paid']);
                Log::info('Paymob Payment Verified Successfully via API.');
                return response()->json(['message' => 'Payment successful'], 200); // Or 201 Created
            } else {
                Log::error('Paymob Payment Verification Failed via API - Transaction ID: ' . $request->input('transaction_id'));
                return response()->json(['error' => 'Payment verification failed'], 400); // Or 400 Bad Request
            }

        } else {
            Log::warning('Paymob Payment Failed - Order ID: ' . $request->input('order_id') . ' - Error Code: ' . $request->input('error_code'));
            // Payment failed, handle accordingly (update order status, log, etc.)
            return response()->json(['error' => 'Payment failed'], 400); // Or 400 Bad Request
        }
    }

    public function verifyPayment($transactionId)
    {
        $authToken = $this->getAuthToken();
        if (!$authToken) {
            return ['is_valid' => false, 'message' => 'Failed to authenticate with Paymob for verification'];
        }

        try {
            $response = Http::get("https://accept.paymob.com/api/acceptance/transactions/{$transactionId}", [
                'auth_token' => $authToken,
            ]);

            if ($response->successful()) {
                $transactionData = $response->json();
                if ($transactionData['is_success']) {
                    return ['is_valid' => true, 'message' => 'Payment verified successfully', 'data' => $transactionData];
                } else {
                    return ['is_valid' => false, 'message' => 'Payment verification failed - transaction not successful', 'data' => $transactionData];
                }
            } else {
                Log::error('Paymob Verify Payment Error: ' . $response->body());
                return ['is_valid' => false, 'message' => 'Payment verification failed - API error', 'error_details' => $response->body()];
            }
        } catch (\Exception $e) {
            Log::error('Paymob Verify Payment Exception: ' . $e->getMessage());
            return ['is_valid' => false, 'message' => 'Payment verification failed - exception', 'exception' => $e->getMessage()];
        }
    }

    public function paymentSuccess(Request $request)
    {
        // This is the frontend return URL after successful payment.
        // You can redirect the user to a success page in your React app from here.
        return redirect(env('PAYMENT_RETURN_URL') . '?payment_status=success');
    }

    public function paymentFailure(Request $request)
    {
        // This is the frontend return URL after failed payment.
        // Redirect to a failure page in your React app.
        return redirect(env('PAYMENT_ERROR_URL') . '?payment_status=failure');
    }

}
