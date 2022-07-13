<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use App\Http\Requests\ValidationLogin;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $UserRepository)
    {
        $this->userRepository = $UserRepository;
    }
//    public function register(ValidationRegister $request)
//    {
//        $data = [
//            'name' => $request->name,
//            'email' => $request->email,
//            'password' => bcrypt($request->password)
//        ];
//        $user = $this->userRepository->create($data);
//    }
    public function login(ValidationLogin $request)
    {
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return responseNotFound(['error' => 'Unauthorized']);
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

        return responseOK(['message' => 'Successfully logged out']);
    }
}
