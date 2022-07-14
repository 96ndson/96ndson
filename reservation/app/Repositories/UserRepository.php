<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends BaseRepository
{

    protected $msgNotFound = 'Test not found';

    public function getModel()
    {
        return User::class;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    
}
