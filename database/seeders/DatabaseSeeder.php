<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Account;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Roles
        $user = Role::create(['name' => 'user']);
        $owner = Role::create(['name' => 'owner']);

        // Permissions
        $permissions = [
            'users-list',
            'users-create',
            'users-edit',
            'users-delete',
        ];

        $user_permissions = [
            'dashboard-view',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        foreach ($user_permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $permissions = Permission::pluck('id', 'id')->all();
        $u_permissions = Permission::pluck('id', 'id')->all();

        $user->syncPermissions($u_permissions);
        $owner->syncPermissions($permissions);

        $account = Account::create(['name' => 'Meet Solutions']);

        User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Meet',
            'last_name' => 'Solutions',
            'email' => 'admin@meetasolutions.com',
            'role' => 'owner',

        ])
        ->assignRole($user)
        ->assignRole($owner);

        $exempleUser = User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Meet',
            'last_name' => 'Solutions',
            'email' => 'contato@meetasolutions.com',
            'role' => 'owner',

        ]);
        $exempleUser->assignRole($user);
        $exempleUser->assignRole($owner);

        User::factory()->count(1)->create([
            'account_id' => $account->id
        ])
        ->each(function (User $user) {
            $user->assignRole('user');
        });
    }
}
