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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

// chi user login vao cần truyền lên token
Route::group([
    'middleware' => 'auth:api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/user-profile', [UserController::class, 'userProfile']);





//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
//    Route::get('/user-profile', [UserController::class, 'userProfile']);
});


Route::group([
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [UserController::class, 'login']);
});
Route::get('/time', [SettingController::class, 'index']);
Route::get('/get-reservation', [ReservationController::class, 'get_reservation']);
Route::get('/food', [FoodController::class, 'index']);
Route::get('/food-by-id', [FoodController::class, 'get_food_by_id']);
Route::get('/shop', [ShopController::class, 'index']);
Route::post('/add-reservation', [ReservationController::class, 'add_reservation']);
Route::get('/show-reservation', [ReservationController::class, 'index']);
Route::get('/delete-reservation/{id}', [ReservationController::class, 'delete_reservation']);
Route::post('/edit-reservation/{id}', [ReservationController::class, 'edit_reservation']);
Route::post('/add-food', [FoodController::class, 'add_food']);
