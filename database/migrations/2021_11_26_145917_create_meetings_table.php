<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeetingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->longText('summary')->nullable();
            $table->longText('purpose')->nullable();
            $table->longText('meeting_notes')->nullable(); // Used for notes when preparing the meeting, but not to take the standard notes field name

            $table->dateTime('start_time')->nullable();
            $table->dateTime('end_time')->nullable();

            $table->text('venue')->nullable();

            $table->foreignId('meeting_type_id')->nullable();

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
        Schema::dropIfExists('meetings');
    }
}
