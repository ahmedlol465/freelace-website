<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class user_balance extends Model
{
    /** @use HasFactory<\Database\Factories\UserBalanceFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'total_balance',
        'pending_balance',
        'available_balance',
        'withdrawal_balance'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
