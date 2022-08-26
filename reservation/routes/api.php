<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('api')->group(function () {
    Route::post('auth/login', [UserController::class, 'login']);
    Route::middleware('auth.jwt')->group(function () {
        Route::post('auth/logout', [UserController::class, 'logout']);
        Route::get('auth/user-profile', [UserController::class, 'userProfile']);
        Route::prefix('reservation')->group(function (){
            Route::post('/add-reservation', [ReservationController::class, 'add_reservation']);
            Route::get('/show-reservation', [ReservationController::class, 'index']);
            Route::get('/delete-reservation/{id}', [ReservationController::class, 'delete_reservation']);
            Route::get('/show-edit-reservation', [ReservationController::class, 'show_edit_reservation']);
            Route::post('/edit-reservation/{id}', [ReservationController::class, 'edit_reservation']);
        });
        Route::prefix('food')->group(function (){
            Route::get('', [FoodController::class, 'index']);
            Route::post('/add-food', [FoodController::class, 'add_food']);
            Route::get('/food-by-id', [FoodController::class, 'get_food_by_id']);
        });
        Route::prefix('time')->group(function (){
            Route::get('', [SettingController::class, 'index']);
        });
        Route::prefix('shop')->group(function (){
            Route::get('', [ShopController::class, 'index']);
        });
    });
});
