<?php

namespace App\Http\Controllers;

use App\Models\user_balance;
use App\Http\Requests\Storeuser_balanceRequest;
use App\Http\Requests\Updateuser_balanceRequest;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\BalanceResource;
use App\Http\Resources\TransactionResource;
// {


//         /**
//      * Display the user's balance.
//      *
//      * @param  int  $userId
//      * @return \Illuminate\Http\Response
//      */
//     public function getBalance($userId)
//     {
//         $balance = user_balance::firstOrCreate(['user_id' => $userId], [
//             'total_balance' => 0.00,
//             'pending_balance' => 0.00,
//             'available_balance' => 0.00,
//             'withdrawal_balance' => 0.00,
//         ]);

//         return new BalanceResource($balance);
//     }

//     /**
//      * Display the user's transaction history.
//      *
//      * @param  int  $userId
//      * @return \Illuminate\Http\Response
//      */
//     public function getTransactions($userId)
//     {
//         $transactions = Transaction::where('user_id', $userId)->orderBy('transaction_date', 'desc')->paginate(10); // Paginate for performance

//         return TransactionResource::collection($transactions);
//     }

//     /**
//      * Simulate a withdrawal request (Simplified).
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  int  $userId
//      * @return \Illuminate\Http\Response
//      */
//     public function requestWithdrawal(Request $request, $userId)
//     {
//         $request->validate([
//             'amount' => 'required|numeric|min:0.01',
//         ]);

//         $amount = $request->amount;
//         $userBalance = user_balance::findOrFail($userId);

//         if ($userBalance->available_balance < $amount) {
//             return response()->json(['message' => 'Insufficient available balance for withdrawal.'], 400);
//         }

//         DB::transaction(function () use ($userId, $amount, $userBalance) {
//             // Record withdrawal transaction
//             Transaction::create([
//                 'user_id' => $userId,
//                 'transaction_type' => 'withdrawal_request',
//                 'amount' => -$amount, // Negative amount for withdrawal
//                 'status' => 'pending',
//                 'notes' => 'Withdrawal request by user via API',
//             ]);

//             // Update user balance
//             $userBalance->decrement('available_balance', $amount);
//             $userBalance->increment('withdrawal_balance', $amount);
//         });

//         return response()->json(['message' => 'Withdrawal request submitted successfully.']);
//     }
//     /**
//      * Display a listing of the resource.
//      */
//     public function index()
//     {
//         //
//     }

//     /**
//      * Store a newly created resource in storage.
//      */
//     public function store(Storeuser_balanceRequest $request)
//     {
//         //
//     }

//     /**
//      * Display the specified resource.
//      */
//     public function show(user_balance $user_balance)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      */
//     public function update(Updateuser_balanceRequest $request, user_balance $user_balance)
//     {
//         //
//     }

//     /**
//      * Remove the specified resource from storage.
//      */
//     public function destroy(user_balance $user_balance)
//     {
//         //
//     }
// }
class UserBalanceController extends Controller
{
    public function index()
    {
        $userId = auth()->user()->id; // Get user ID from authenticated user
        // $balances = user_balance::with('user')->paginate(10)->first($userId);
        $balances = user_balance::with('user')->where('user_id', $userId)->first();

        return response()->json([
            'success' => true,
            'data' => $balances
        ]);
    }

    public function store(Request $request)
    {
        $userId = auth()->user()->id; // Get user ID from authenticated user

        if (user_balance::where('user_id', $userId)->exists()) {
            return response()->json(['error' => 'You already have a balance record.'], 422);
        }

        $validated = $request->validate([
            'total_balance' => 'required|numeric|min:0',
            'pending_balance' => 'required|numeric|min:0',
            'available_balance' => 'required|numeric|min:0',
            'withdrawal_balance' => 'required|numeric|min:0',
        ]);
        $validated['user_id'] = auth()->id(); // Automatically assign authenticated user ID

        $balance = user_balance::create($validated);

        return response()->json([
            'success' => true,
            'data' => $balance
        ], 201);
    }

    public function show($id)
    {
        $balance = user_balance::with('user')->findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $balance
        ]);
    }

    public function update(Request $request, $id)
    {
        $balance = user_balance::findOrFail($id);

        $validated = $request->validate([
            'total_balance' => 'sometimes|numeric|min:0',
            'pending_balance' => 'sometimes|numeric|min:0',
            'available_balance' => 'sometimes|numeric|min:0',
            'withdrawal_balance' => 'sometimes|numeric|min:0',
        ]);

        $balance->update($validated);

        return response()->json([
            'success' => true,
            'data' => $balance
        ]);
    }

    public function destroy($id)
    {
        $balance = user_balance::findOrFail($id);
        $balance->delete();

        return response()->json([
            'success' => true,
            'message' => 'User balance deleted successfully'
        ]);
    }
}
