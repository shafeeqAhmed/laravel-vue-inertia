<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Permission::create(['name' => 'meeting-permission']); // Able to deal with meetings

        $roleSuper = Role::create(['name' => 'Admin']);

        $roleSuper->givePermissionTo('meeting-permission');
    }
}
