<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\FoodRepository;

class FoodController extends Controller
{
  protected $foodRepository;

  public function __construct(FoodRepository $foodRepository)
  {
    $this->foodRepository = $foodRepository;
  }
  public function index(){
    return $this->foodRepository->getFoodNew();
  }
}
