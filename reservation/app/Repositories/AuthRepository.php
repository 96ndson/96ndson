<?php

namespace App\Repositories;

use App\Models\User;

class AuthRepository extends BaseRepository
{

    /**
     * @inheritDoc
     */
    public function getModel()
    {
        // TODO: Implement getModel() method.
        return User::class;
    }
}
