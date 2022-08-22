<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        DB::table('settings')->updateOrInsert([
            'shop_id' => 1,
            'type' => $faker->numberBetween(0, 10),
            'setting_time' => '[
          "10:00",
          "11:30",
          "12:30"
        ]',
            'date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
