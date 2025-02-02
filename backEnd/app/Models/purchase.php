<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class purchase extends Model
{
    /** @use HasFactory<\Database\Factories\PurchaseFactory> */
    use HasFactory;
    protected $fillable = [
        'buyer_user_id',
        'seller_user_id',
        'service_id',
        'purchase_date',
        'status',
        'purchase_price',
    ];

    /**
     * Get the buyer user who made the purchase.
     */
    public function buyerUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'buyer_user_id');
    }

    /**
     * Get the seller user who sold the service.
     */
    public function sellerUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_user_id');
    }

    /**
     * Get the service that was purchased.
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
