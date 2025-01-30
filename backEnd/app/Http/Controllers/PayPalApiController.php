<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;


class PayPalApiController extends Controller
{
    /**
     * Create a PayPal order.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createOrder(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
        // $response = $provider->capturePaymentOrder($request->token);

        $orderData = [
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('payment.success'), // Route named 'payment.success'
                 "cancel_url" => route('payment.cancel')  // Route named 'payment.cancel'
            ],
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD", // You can parameterize this later if needed
                        "value" => $request->amount ?? '10.00' // Get amount from request or default to 10.00
                    ]
                ]
            ],
            // No application_context needed for API-only, redirects are handled by frontend
        ];



        try {
            $response = $provider->createOrder($orderData);


            // if(isset($response['id']) && $response['id']!=null && $response['status'] == 'CREATED'){
            //     foreach($response['links'] as $link){
            //         if($link['rel'] === 'approve'){
            //             return redirect()->away($link['href']);
            //         }
            //     }
            // }else{
            //     return response()->json(['error' => 'Failed to create PayPal order'], 500);
            // }


            return response()->json($response); // Return the PayPal API response as JSON
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500); // Return error response
        }
    }


    public function success(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($request->token);
        // dd($response);
        // Handle successful payment
        return response()->json(['message' => 'Payment successful',
                                'response' => $response
    ]);
    }
    /**
     * Capture payment for a PayPal order.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function capturePayment(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();

        // Validate that 'token' exists in the request
        $token = $request->input('token');
        if (!$token) {
            return response()->json(['error' => 'Token is required'], 400);
        }

        try {
            $response = $provider->capturePaymentOrder($token);
            // dd($response);
            return response()->json($response);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
