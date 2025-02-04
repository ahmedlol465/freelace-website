<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userData extends Model
{
        use HasFactory;

        protected $table = 'userData';

        protected $fillable = [
            'userId',
            'specialist',
            'jobTitle',
            'description',
            'skillsOfWork',
        ];

        protected $casts = [
            'skillsOfWork' => 'array', // Cast skillsOfWork to array
        ];

        // public function user()
        // {
        //     return $this->belongsTo(User::class, 'userId');
        // }
        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class, 'userId', 'id'); // Assuming 'userId' in userData table and 'id' in users table
        }
}
