<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ValidationReservation;
use App\Repositories\ReservationRepository;

class ReservationController extends Controller
{
    protected $reservationRepository;

    public function __construct(ReservationRepository $reservationRepository)
    {
        $this->reservationRepository = $reservationRepository;
    }

    public function add_reservation(ValidationReservation $request)
    {
        $requestData = $request->only([
            'shop_id',
            'user_id',
            'people',
            'children',
            'baby',
            'style',
            'date_time',
        ]);
        $test = $this->reservationRepository->create($requestData);
        return responseCreated($test);
    }

    public function index(Request $request)
    {
        return $this->reservationRepository->getReservationByUserID($request->id);
    }

    public function delete_reservation($id)
    {
        $test = $this->reservationRepository->findOrFail($id);
        $this->reservationRepository->delete($test);
        return responseUpdatedOrDeleted();
    }

    public function edit_reservation($id, ValidationReservation $request)
    {
        $test = $this->reservationRepository->findOrFail($id);
        $requestData = $request->only([
            'shop_id',
            'user_id',
            'people',
            'children',
            'baby',
            'style',
            'date_time',
        ]);
        $this->reservationRepository->update($test, $requestData);
        return responseUpdatedOrDeleted();
    }
}
