<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\FoodRepository;
use App\Http\Requests\ValidationFood;

class FoodController extends Controller
{
    protected $foodRepository;

    public function __construct(FoodRepository $foodRepository)
    {
        $this->foodRepository = $foodRepository;
    }

    public function index()
    {
        return $this->foodRepository->getFoodNew();
    }

    public function add_food(Request $request)
    {
        return $this->foodRepository->addFood($request);
    }

    public function get_food_by_id(Request $request)
    {
        return $this->foodRepository->getFoodByID($request->id);
    }
}
