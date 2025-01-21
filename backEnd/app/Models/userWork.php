<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userWork extends Model
{
    use HasFactory;

    protected $table = 'userWork';

    protected $fillable = [
        'userId',
        'workTitle',
        'workDescription',
        'thumbnail',
        'workPhoto',
        'completeDate',
        'workLink',
        'skillsOfWork',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }
}
