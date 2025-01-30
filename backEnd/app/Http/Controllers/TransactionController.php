<?php

namespace App\Http\Controllers;

use App\Models\transaction;
use App\Http\Requests\StoretransactionRequest;
use App\Http\Requests\UpdatetransactionRequest;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id('transaction_id');
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('transaction_type', 50);
            $table->decimal('amount', 15, 2);
            $table->timestamp('transaction_date')->useCurrent();
            $table->string('status', 50)->default('pending');
            $table->foreignId('related_job_id')->nullable()->constrained('jobs')->nullOnDelete();
            $table->foreignId('related_service_id')->nullable()->constrained('services')->nullOnDelete();
            $table->text('notes')->nullable();
            $table->timestamps(); // Created_at and updated_at (optional)
        });
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoretransactionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatetransactionRequest $request, transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(transaction $transaction)
    {
        //
    }
}
