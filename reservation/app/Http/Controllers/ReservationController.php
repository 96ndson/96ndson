<?php

namespace App\Http\Controllers;
use App\Models\SettingShopModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    public function testapi(){
        return response()->json(SettingShopModel::all());
    }
}
