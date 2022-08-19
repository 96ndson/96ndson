<?php

namespace App\Http\Controllers;

use App\Repositories\SettingRepository;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    protected $settingRepository;

    public function __construct(SettingRepository $settingRepository)
    {
        $this->settingRepository = $settingRepository;
    }

    // public function index(Request $request){
    //     dd($request->date);
    //     return $this->settingRepository->getday($request->date);
    // }
    public function index(){
        return $this->settingRepository->getAll();
    }

}
