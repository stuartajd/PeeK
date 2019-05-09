<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'company_roles';
    protected $hidden = ['created_at', 'updated_at', 'company_id'];
}
