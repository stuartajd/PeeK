<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 500);
            $table->string('slug', 100);
            $table->longText('post');
            $table->enum('type', ['news', 'updates']);
            $table->softDeletes();
            $table->timestamps();
        });

        DB::table('posts')->insert([
            'title'=>'Test',
            'slug'=>'test',
            'post'=>'Testing',
            'type'=>'updates'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
