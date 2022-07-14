<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequest $request)
    {

        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if (!$token = auth()->attempt($data)) {
            return responseError(['error' => 'Unauthorized'], 401);
        }
        return respondWithToken($token);
    }


    public function logout()
    {
        auth()->logout();
        return responseOK(['message' => 'User successfully signed out']);
    }

}
