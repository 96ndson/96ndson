<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

use App\Repositories\AuthRepository;

class AuthController extends Controller
{
    protected $authRepository;
    public function __construct(AuthRepository $authRepository) {
        $this->authRepository = $authRepository;
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(RegisterRequest $request) {
        $data = [
            "email" => $request->input('email'),
            "name" => $request->input('name'),
            "password" => bcrypt($request->input('password'))
        ];
        $user = $this->authRepository->create($data);
        return responseCreated($user);
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
        return response()->json(['message' => trans('auth.logout')]);
    }

    public function profile() {
        return response()->json(auth()->user());
    }
}
