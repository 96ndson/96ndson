<?php

namespace App\Repositories;
use App\Models\Food;
class FoodRepository extends BaseRepository
{

  /**
   * @inheritDoc
   */
  public function getModel()
  {
    return Food::class;
  }
  public function getFoodNew()
  {
    return $this->model->latest()->limit(1)->first();
  }
}
