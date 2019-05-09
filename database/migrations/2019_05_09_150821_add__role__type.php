<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRoleType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
	    Schema::table('company_roles', function (Blueprint $table) {
		    $table->enum('role_type', array('developer', 'administrator', 'task'))->nullable();
	    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
	    Schema::table('company_roles', function (Blueprint $table) {
		    $table->dropColumn('role_type');
	    });
    }
}
