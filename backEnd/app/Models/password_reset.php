<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class password_reset extends Model
{
    protected $table = 'password_reset_tokens';



    protected $fillable = [
        'email',
        'code',
    ];

    public $timestamps = false;

}
