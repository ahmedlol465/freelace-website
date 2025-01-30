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
class UserBalanceController extends Controller
{


        /**
     * Display the user's balance.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function getBalance($userId)
    {
        $balance = user_balance::firstOrCreate(['user_id' => $userId], [
            'total_balance' => 0.00,
            'pending_balance' => 0.00,
            'available_balance' => 0.00,
            'withdrawal_balance' => 0.00,
        ]);

        return new BalanceResource($balance);
    }

    /**
     * Display the user's transaction history.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function getTransactions($userId)
    {
        $transactions = Transaction::where('user_id', $userId)->orderBy('transaction_date', 'desc')->paginate(10); // Paginate for performance

        return TransactionResource::collection($transactions);
    }

    /**
     * Simulate a withdrawal request (Simplified).
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function requestWithdrawal(Request $request, $userId)
    {
        $request->validate([
            'amount' => 'required|numeric|min:0.01',
        ]);

        $amount = $request->amount;
        $userBalance = user_balance::findOrFail($userId);

        if ($userBalance->available_balance < $amount) {
            return response()->json(['message' => 'Insufficient available balance for withdrawal.'], 400);
        }

        DB::transaction(function () use ($userId, $amount, $userBalance) {
            // Record withdrawal transaction
            Transaction::create([
                'user_id' => $userId,
                'transaction_type' => 'withdrawal_request',
                'amount' => -$amount, // Negative amount for withdrawal
                'status' => 'pending',
                'notes' => 'Withdrawal request by user via API',
            ]);

            // Update user balance
            $userBalance->decrement('available_balance', $amount);
            $userBalance->increment('withdrawal_balance', $amount);
        });

        return response()->json(['message' => 'Withdrawal request submitted successfully.']);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Storeuser_balanceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(user_balance $user_balance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updateuser_balanceRequest $request, user_balance $user_balance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user_balance $user_balance)
    {
        //
    }
}
