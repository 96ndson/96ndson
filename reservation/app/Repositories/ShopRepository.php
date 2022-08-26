<?php

namespace App\Repositories;

use App\Models\Shop;

class ShopRepository extends BaseRepository
{

    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Shop::class;
    }
}
