<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        DB::table('food')->updateOrInsert([
            'shop_id' => 1,
            'price' => 2000,
            'slug' => 'hai-san',
            'title' => 'Top 7 Quán ăn hải sản Ninh Thuận ngon gần biển Ninh Chữ',
            'description' => 'Ninh Thuận sở hữu tổng chiều dài bờ biển 105km đem lại cho nơi đây nguồn hải sản vô cùng phong phú.',
            'content' => $faker->text(1000),
            'image' => 'https://ninhthuanreview.com/wp-content/uploads/2021/11/Quan-an-hai-san-Ninh-Thuan.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
