<?php

namespace App\Repositories;
use App\Models\Setting;
class SettingRepository extends BaseRepository
{

    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Setting::class;
    }

    public function getDateSetting($request)
    {
        $dateSelect = \Illuminate\Support\Carbon::parse($request);
        $weekStartDate = $dateSelect->startOfWeek()->format('Y-m-d H:i');
        $weekEndDate = $dateSelect->endOfWeek()->format('Y-m-d H:i');
        return $this->model->where('date','>=',$weekStartDate)->where('date','<=',$weekEndDate  )->get();
    }
}
