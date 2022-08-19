<?php

namespace App\Repositories;
use App\Models\Reservation;
class ReservationRepository extends BaseRepository
{

  /**
   * @inheritDoc
   */
  public function getModel()
  {
    return Reservation::class;
  }
}
