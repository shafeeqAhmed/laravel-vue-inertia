<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeetingTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meeting_types', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->longText('description')->nullable();

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
        Schema::dropIfExists('meeting_types');
    }
}
