<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->boolean('opted-in')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });


        DB::table('users')->insert([
            'name'=>'Stuart Davidson',
            'email'=>'me@stuartd.co.uk',
            'password'=>'$2y$10$ZNrB0rD2aaLiAYmhQih6vOGBJgPU5uLV.COxclvAYhIPCwEb5y4Cm'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
