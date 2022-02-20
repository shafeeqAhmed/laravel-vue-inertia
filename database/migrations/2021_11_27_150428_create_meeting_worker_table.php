<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeetingWorkerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meeting_worker', function (Blueprint $table) {
            $table->id();

            $table->foreignId('meeting_id');
            $table->foreignId('worker_id');

            $table->boolean('invited')->nullable();
            $table->boolean('apologies')->nullable();
            $table->boolean('attended')->nullable();

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
        Schema::dropIfExists('meeting_worker');
    }
}
