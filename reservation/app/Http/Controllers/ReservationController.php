<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ReservationRepository;

class ReservationController extends Controller
{
  protected $reservationRepository;

  public function __construct(ReservationRepository $reservationRepository)
  {
    $this->reservationRepository = $reservationRepository;
  }
  public function add_reservation(Request $request)
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
    $test = $this->reservationRepository->create($requestData);
    return responseCreated(new CreateResource($test));
  }
}
