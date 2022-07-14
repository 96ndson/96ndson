<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Http\Requests\LoginRequest;


class UserController extends Controller
{
    protected $userRepository;
    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequest $request){
        $data = [
            "email" => $request->input('email'),
            "password" => $request->input('password')
        ];
        if (! $token = auth()->attempt($data)) {
            $message = trans('auth.failed');
            return responseNotFound($message);
        }
        return respondWithToken($token);
    }

    public function logOut() {
        auth()->logout();
        return responseOK(['message' => trans('auth.logout')]);
    }
}
