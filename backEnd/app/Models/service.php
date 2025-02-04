<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class service extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'section',
        'subsection',
        'description',
        'thumbnail_photo',
        'main_photo',
        'required_skills',
        'price',
        'delivery_duration',
        'from_date',
        'to_date',
        'link',
        'user_id',
        'status'
    ];

    

}
