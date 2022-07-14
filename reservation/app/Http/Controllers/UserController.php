<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Repositories\UserRepository;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function login(LoginRequest $request)
    {
        $data = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];
        if (!$token = auth()->attempt($data)) {
            return responseNotFound(['error' => trans('auth.failed')]);
        }
        return respondWithToken($token);
    }
    public function userProfile()
    {
        return responseOK(auth()->user());
    }
    public function logout()
    {
        auth()->logout();

        return responseOK(['message' => trans('auth.logout')]);
    }
}
