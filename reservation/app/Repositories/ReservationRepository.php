<?php

namespace App\Repositories;

use App\Models\Reservation;
use Carbon\Carbon;

class ReservationRepository extends BaseRepository
{

    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Reservation::class;
    }

    public function getReservation($id)
    {
        return $this->model->where('user_id', $id)->where('date', '>=', Carbon::now())->get();
    }

    public function getReservationByUserID($id)
    {
        return $this->model->where('user_id', $id)->first();
    }

    public function addReservation($request)
    {
        $requestData = $request->only([
            'shop_id',
            'user_id',
            'people',
            'children',
            'baby',
            'style',
            'date',
            'time'
        ]);
        $reservation = $this->model->create($requestData);
        return responseCreated($reservation);
    }

}
