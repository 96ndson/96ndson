<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class RelationshipController extends Controller
{
    protected $UserRepository;
    public function __construct(UserRepository $UserRepository)
    {
        $this->UserRepository = $UserRepository;
    }

    public function test(){
        $users = $this->UserRepository->getAllUser();
        return (json_encode($users));


//        foreach ($users as $user) {
//            $roles = $user->roles; // = 1 query
//            foreach ($roles as $role) {
//                dd($role->name);
//            }
//        }
    }
}
