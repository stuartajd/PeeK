<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCompanyToAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('accounts', function (Blueprint $table) {
			$table->integer('company_id');
        });

		Schema::table('audits', function (Blueprint $table) {
			$table->integer('company_id');
		});

		Schema::table('users', function (Blueprint $table) {
			$table->integer('company_id');
		});

		Schema::table('tasks', function (Blueprint $table) {
			$table->integer('company_id');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('accounts', function (Blueprint $table) {
            $table->dropColumn('company_id');
        });

		Schema::table('audits', function (Blueprint $table) {
			$table->dropColumn('company_id');
		});

		Schema::table('users', function (Blueprint $table) {
			$table->dropColumn('company_id');
		});

		Schema::table('tasks', function (Blueprint $table) {
			$table->dropColumn('company_id');
		});
    }
}
