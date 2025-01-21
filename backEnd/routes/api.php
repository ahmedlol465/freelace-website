<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
