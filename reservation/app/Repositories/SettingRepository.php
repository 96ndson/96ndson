<?php

namespace App\Repositories;
use App\Models\SettingShopModel;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon ;
class SettingRepository extends BaseRepository
{

    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return SettingShopModel::class;
    }

    public function getday($request){
        $dateSelect = Carbon::parse($request);
        $weekStart = $dateSelect->startOfWeek()->format('Y-m-d H:i');
        $weekEnd = $dateSelect->endOfWeek()->format('Y-m-d H:i');
        return $this->model->where('date','>=',$weekStart)->where('date','<=',$weekEnd)->get();
    }
}
