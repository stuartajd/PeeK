<?php

use Illuminate\Database\Seeder;

class TasksUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks_users')->insert([
            'user_id' => '1',
            'task_id' => '1',
        ]);
    }
}
