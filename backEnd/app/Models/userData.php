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

        public function user()
        {
            return $this->belongsTo(User::class, 'userId');
        }
}
