<?php

namespace App\Http\Controllers;

use App\Models\transaction;
use App\Http\Requests\StoretransactionRequest;
use App\Http\Requests\UpdatetransactionRequest;

use Illuminate\Http\Request;
class TransactionController extends Controller
// {
//     /**
//      * Display a listing of the resource.
//      */
//     public function index()
//     {
//         Schema::create('transactions', function (Blueprint $table) {
//             $table->id('transaction_id');
//             $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
//             $table->string('transaction_type', 50);
//             $table->decimal('amount', 15, 2);
//             $table->timestamp('transaction_date')->useCurrent();
//             $table->string('status', 50)->default('pending');
//             $table->foreignId('related_job_id')->nullable()->constrained('jobs')->nullOnDelete();
//             $table->foreignId('related_service_id')->nullable()->constrained('services')->nullOnDelete();
//             $table->text('notes')->nullable();
//             $table->timestamps(); // Created_at and updated_at (optional)
//         });
//     }

//     /**
//      * Store a newly created resource in storage.
//      */
//     public function store(StoretransactionRequest $request)
//     {
//         //
//     }

//     /**
//      * Display the specified resource.
//      */
//     public function show(transaction $transaction)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      */
//     public function update(UpdatetransactionRequest $request, transaction $transaction)
//     {
//         //
//     }

//     /**
//      * Remove the specified resource from storage.
//      */
//     public function destroy(transaction $transaction)
//     {
//         //
//     }
// }


{
    public function index()
    {
        $transactions = transaction::with(['user', 'project','service'])->paginate(10);
        return response()->json([
            'success' => true,
            'data' => $transactions
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'transaction_type' => 'required|string|max:50',
            'amount' => 'required|numeric|min:0',
            'status' => 'sometimes|string|max:50',
            'related_job_id' => 'nullable|exists:jobs,id',
            'related_service_id' => 'nullable|exists:services,id',
            'notes' => 'nullable|string',
        ]);

        $transaction = transaction::create($validated);

        return response()->json([
            'success' => true,
            'data' => $transaction
        ], 201);
    }

    public function show($id)
    {
        $transaction = transaction::with(['user', 'job', 'service'])->findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $transaction
        ]);
    }

    public function update(Request $request, $id)
    {
        $transaction = transaction::findOrFail($id);

        $validated = $request->validate([
            'transaction_type' => 'sometimes|string|max:50',
            'amount' => 'sometimes|numeric|min:0',
            'status' => 'sometimes|string|max:50',
            'related_job_id' => 'nullable|exists:jobs,id',
            'related_service_id' => 'nullable|exists:services,id',
            'notes' => 'nullable|string',
        ]);

        $transaction->update($validated);

        return response()->json([
            'success' => true,
            'data' => $transaction
        ]);
    }

    public function destroy($id)
    {
        $transaction = transaction::findOrFail($id);
        $transaction->delete();

        return response()->json([
            'success' => true,
            'message' => 'Transaction deleted successfully'
        ]);
    }
}
