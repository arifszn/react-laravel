<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'name', 
        'email', 
        'phone', 
        'picture',
        'address',
        'user_id',
        'description'
    ];
}
