<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class ReservationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($j = 1; $j < 5; $j++) {
            $faker = Faker::create();
            DB::table('reservations')->updateOrInsert([
                'shop_id' => $j,
                'user_id' => $j,
                'style' => $faker->numberBetween(0, 10),
                'people' => $faker->numberBetween(0, 10),
                'baby' => $faker->numberBetween(0, 10),
                'children' => $faker->numberBetween(0, 10),
                'date_time' => '"2022-08-11 10:30"',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
