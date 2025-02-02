<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProjectController;

use App\Http\Controllers\PaymobController;
use App\Http\Controllers\PayPalApiController;
use App\Http\Controllers\UserBalanceController;

// use App\Http\Controllers\UserBalanceController;
use App\Http\Controllers\TransactionController;

use App\Http\Controllers\PurchaseController; // Import PurchaseController


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

use App\Http\Controllers\UserController;

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

Route::
middleware('auth:api')->
post('/verifyEmail', [UserController::class, 'verifyEmail']);


Route::
// middleware('auth:api')->
post('/UserData', [UserController::class, 'UserData']);

Route::
// middleware('auth:api')->
post('/UserWork', [UserController::class, 'UserWork']);

Route::post('/addService', [ServiceController::class, 'store']);

Route::post('/addProject', [ProjectController::class, 'store']);



// Route::prefix('paymob')->group(function ()  {
    Route::post('/payment-key', [PaymobController::class, 'getAuthToken']);
    Route::post('/create-order', [PaymobController::class, 'createOrder']);
    Route::post('/callback', [PaymobController::class, 'paymentCallback']); // Paymob IPN
// });

Route::get('/payment/failure', [PaymobController::class, 'paymentFailure'])->name('payment.failure'); // Frontend redirect on failure
Route::get('/payment/success', [PaymobController::class, 'paymentSuccess'])->name('payment.success'); // Frontend redirect on success




// Route::prefix('paypal')->group(function () {
    Route::post('/paypal/create-order', [PayPalApiController::class, 'createOrder'])
    ->name('paypal.orders.create');

    Route::post('/paypal/capture-payment', [PayPalApiController::class, 'capturePayment'])->name('paypal.orders.capture');
    // Add more API routes here as needed (e.g., get order details, refunds, etc.)
// });


Route::get('/paypal/success', [PayPalApiController::class, 'success'])->name("payment.success");
// Route::get('/payment/success', function () {
//     return 'Payment was successful!';
// })->name('payment.success');

Route::get('/payment/cancel', function () {
    return 'Payment was canceled.';
})->name('payment.cancel');

Route::get('/getUser', [UserController::class, 'GetUserData']);


Route::middleware('auth:api')->
apiResource('user-balances', UserBalanceController::class);


Route::apiResource('transactions', TransactionController::class);


Route::middleware('auth:api')->
get('projects/status-counts', [ProjectController::class, 'getStatusCounts']);


Route::middleware('auth:api')->
get('services/status-counts', [ServiceController::class, 'getStatusCounts']);


Route::middleware('auth:api')->
get('purchases/status-counts', [PurchaseController::class, 'getStatusCounts']);


Route::
middleware('auth:api')->
apiResource('purchases', PurchaseController::class);
