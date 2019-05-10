<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksBreakdownTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks_breakdown', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('description');
	        $table->integer('company_id')->nullable();
	        $table->integer('task_id')->nullable();
            $table->integer('created_by')->nullable();
            $table->enum('status', array('awaiting', 'progress', 'testing', 'complete'))->default('awaiting');
            $table->integer('order')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks_breakdown');
    }
}
