<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'project_name',
        'project_description',
        'project_image',
        'required_skills',
        'section',
        'sub_section',
        'project_link',
        'project_question',
        'user_id',
        'status'
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
