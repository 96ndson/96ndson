<?php

namespace App\Repositories;

use App\Models\Food;
use App\Services\UploadService;

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

    public function addFood($request)
    {
        if ($request->has('file_image')) {
            $thumbnail = (new UploadService)->store($request->file('file_image'));
        }
        $request->merge([
            'image' => $thumbnail,
        ]);
        $requestData = $request->only([
            'shop_id',
            'title',
            'slug',
            'description',
            'content',
            'image',
            'price'
        ]);
        $food = $this->model->create($requestData);
        return responseCreated($food);
    }

    public function getFoodByID($id)
    {
        return $this->model->where('shop_id', $id)->first();
    }
}
