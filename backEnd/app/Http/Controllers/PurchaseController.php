<?php

namespace App\Http\Controllers;

use App\Models\purchase;
use App\Http\Requests\StorepurchaseRequest;
use App\Http\Requests\UpdatepurchaseRequest;

use Illuminate\Http\Request;
class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $purchases = Purchase::where('buyer_user_id', $user->id)->paginate(10);

        return response()->json([
            'data' => collect($purchases->items())->map(function ($purchase) {
                return $purchase->toArray();
            }),
            'pagination' => [
                'total' => $purchases->total(),
                'count' => $purchases->count(),
                'per_page' => $purchases->perPage(),
                'current_page' => $purchases->currentPage(),
                'total_pages' => $purchases->lastPage(),
            ],
            'meta' => [
                'api_version' => '1.0',
            ],
        ]);
    }

    /**
     * Store a newly created purchase in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'seller_user_id' => 'required|exists:users,id',
            'service_id' => 'required|exists:services,id',
            'purchase_price' => 'required|numeric|min:0',
            'status' => 'nullable|string|in:awaiting_seller_approval,in_progress,completed,canceled', // Example statuses, adjust as needed
        ]);

        $purchase = Purchase::create([
            'buyer_user_id' => auth()->user()->id, // Buyer is the authenticated user
            'seller_user_id' => $request->seller_user_id,
            'service_id' => $request->service_id,
            'purchase_price' => $request->purchase_price,
            'status' => $request->status ?? 'awaiting_seller_approval', // Default status
        ]);



        return response()->json([
            'message' => 'Purchase created successfully',
            'purchase' => $purchase,
            'meta' => [
                'api_version' => '1.0',
            ],
        ], 201); // 201 Created status code

    }

    /**
     * Display the specified purchase.
     */
    public function show(Purchase $purchase)
    {
        $this->authorize('view', $purchase); // You'll need to create policies for authorization
        return response()->json([
            'data' => $this->formatPurchaseResponse($purchase),
            'meta' => [
                'api_version' => '1.0',
            ],
        ]);
    }

    /**
     * Update the specified purchase in storage.
     */
    public function update(Request $request, Purchase $purchase)
    {
        $this->authorize('update', $purchase);

        $request->validate([
            'seller_user_id' => 'sometimes|required|exists:users,id',
            'service_id' => 'sometimes|required|exists:services,id',
            'purchase_price' => 'sometimes|required|numeric|min:0',
            'status' => 'sometimes|nullable|string|in:awaiting_seller_approval,in_progress,completed,canceled', // Example statuses, adjust as needed
        ]);

        $purchase->update($request->only(['seller_user_id', 'service_id', 'purchase_price', 'status']));

        return response()->json([
            'message' => 'Purchase updated successfully',
            'purchase' => $this->formatPurchaseResponse($purchase),
            'meta' => [
                'api_version' => '1.0',
            ],
        ]);
    }

    /**
     * Remove the specified purchase from storage.
     */
    public function destroy(Purchase $purchase)
    {
        $this->authorize('delete', $purchase);
        $purchase->delete();
        return response()->json([
            'message' => 'Purchase deleted successfully',
            'meta' => [
                'api_version' => '1.0',
            ],
        ]);
    }

    /**
     * Get purchase status counts and percentages for dashboard.
     */
    public function getStatusCounts()
    {
        $user = auth()->user();
        $purchaseCounts = Purchase::where('buyer_user_id', $user->id)
            ->select('status', \DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->keyBy('status');

        $totalPurchases = Purchase::where('buyer_user_id', $user->id)->count();

        $statuses = [
            'awaiting_seller_approval', 'in_progress', 'completed', 'canceled' // Purchase statuses - adjust based on your actual statuses
        ];

        $statusData = [];
        foreach ($statuses as $status) {
            $count = $purchaseCounts->get($status)?->count ?? 0;
            $percentage = $totalPurchases > 0 ? round(($count / $totalPurchases) * 100) : 0;
            $statusData[$status] = [
                'count' => $count,
                'percentage' => $percentage,
            ];
        }

        return response()->json([
            'data' => $statusData,
            'meta' => [
                'api_version' => '1.0',
            ],
        ]);
    }



}
