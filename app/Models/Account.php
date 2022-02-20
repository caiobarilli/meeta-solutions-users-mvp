<?php

namespace App\Models;

use App\Traits\Uuids;

class Account extends Model
{
    use Uuids;

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
