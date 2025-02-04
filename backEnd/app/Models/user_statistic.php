<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_statistic extends Model
{
    /** @use HasFactory<\Database\Factories\UserStatisticFactory> */
    use HasFactory;
    protected $fillable = [
        'user_id',
        'ratings',
        'project_completion_rate',
        'reemployment_rate',
        'on_time_delivery_rate',
        'average_response_time',
        'registration_date',
        'last_seen_at',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
