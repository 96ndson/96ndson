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
        $this->reservationRepository->addReservation($request);
    }

    public function index(Request $request)
    {
        return $this->reservationRepository->getReservation($request->id);
    }


    public function show_edit_reservation(Request $request)
    {
        return $this->reservationRepository->find($request->id);
    }

    public function delete_reservation($id)
    {
        $reservation = $this->reservationRepository->findOrFail($id);
        $this->reservationRepository->delete($reservation);
        return responseUpdatedOrDeleted();
    }

    public function edit_reservation($id, ValidationReservation $request)
    {
        $reservation = $this->reservationRepository->findOrFail($id);
        $requestData = $request->only([
            'shop_id',
            'user_id',
            'people',
            'children',
            'baby',
            'style',
            'date_time',
        ]);
        $edit = $this->reservationRepository->update($reservation, $requestData);
        return responseUpdatedOrDeleted($edit);
    }
}
