<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use App\Http\Requests\ValidationLogin;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function login(ValidationLogin $request)
    {
        $credentials = $request->only('email', 'password');
        if (!$token = auth()->attempt($credentials)) {
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
