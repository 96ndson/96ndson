<?php

namespace App\Repositories;
use App\Models\User;
class UserRepository extends BaseRepository
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
