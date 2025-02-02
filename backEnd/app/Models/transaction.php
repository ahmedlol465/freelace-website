<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class transaction extends Model
{
    /** @use HasFactory<\Database\Factories\TransactionFactory> */
    use HasFactory;




    protected $fillable = [
        'user_id',
        'transaction_type',
        'amount',
        'transaction_date',
        'status',
        'related_job_id',
        'related_service_id',
        'notes'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class, 'related_job_id');
    }


    public function service()
    {
        return $this->belongsTo(Service::class, 'related_service_id');
    }

    }
