<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionSeeder::class);

        \App\Models\User::factory(10)->create();

        \App\Models\DocumentType::factory(5)->create();
        \App\Models\MeetingType::factory(5)->create();

        \App\Models\Worker::factory(25)->create();

        \App\Models\Meeting::factory(25)->create();

    }
}
