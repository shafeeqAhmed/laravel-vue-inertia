<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workers', function (Blueprint $table) {
            $table->id();

            $table->string('forenames')->nullable();
            $table->string('surname');

            $table->longText('description')->nullable();
            $table->string('title')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();

            $table->foreignId('user_id')->nullable();

            // Default admin panel fields
            $table->mediumText('notes')->nullable();
            $table->date('valid_from')->nullable();
            $table->date('valid_to')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workers');
    }
}
