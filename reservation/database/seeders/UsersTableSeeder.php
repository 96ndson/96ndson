<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker::create();
        DB::table('users')->updateOrInsert([
            'role' => $faker->numberBetween(0, 2),
            'name' => 'tuan ngoc',
            'email' => 'ngocsival@gmail.com',
            'password' => bcrypt('123456'),
            'address' => $faker->text(100),
            'mobile' => $faker->numberBetween(1000000000, 9999999999),
            'image' => $faker->imageUrl(640, 480, 'animals', true),
            'email_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
