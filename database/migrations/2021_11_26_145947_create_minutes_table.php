<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMinutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('minutes', function (Blueprint $table) {
            $table->id();

            $table->text('content')->nullable();

            $table->integer('order')->nullable();

            $table->foreignId('meeting_id')->nullable();
            $table->foreignId('parent_id')->nullable(); // A parent minute if one exists

            // Default admin panel fields
            $table->mediumText('notes')->nullable();

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
        Schema::dropIfExists('minutes');
    }
}
