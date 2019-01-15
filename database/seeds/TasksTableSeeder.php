<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker::create();

        DB::table('tasks')->insert([
            'title' => $faker->sentence(),
            'description' => $faker->text(),
            'priority' => 'urgent',
            'due_date' => $faker->date(),
            'created_by' => '1'
        ]);
    }
}
