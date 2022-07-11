<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends BaseRepository
{

    protected $msgNotFound = 'Test not found';

    public function getModel()
    {
        return User::class;
    }
    public function getAll()
    {
        return $this->model->all();
        // User::where('created_at', '>=', now())->get();
    }
    public function getAllUser()
    {
        // with = load khác vị trí sd
        $date = '2022-06-18';
        $date_1 = '2022-06-18';
        // return $this->model->get()->load([
        //     'roles' => function ($query) use ($date, $date_1) {
        //         $query->whereDate('roles.created_at', '>=', $date);
        //     } ,
        //     'userRole' => function ($query)  {
        //         //
        //         // $query->where('user_roles.');
        //     }
        // ]);

        $roleStaff = $this->model::STAFF;
        return $this->model
            ->with([
                'roles' => function ($query) use ($date, $date_1) {
                    $query->whereDate('roles.created_at', '>=', $date);
                },
//                'userRole' => function ($query) {
//                    //
//                    // $query->where('user_roles.');
//                }
            ])
            ->whereHas('roles', function ($query) use ($roleStaff) {
                $query->where('roles.id', $roleStaff);
            })
//             ->whereHas('userRole')
            ->get();
        // User::where('created_at', '>=', now())->get();
    }
}

