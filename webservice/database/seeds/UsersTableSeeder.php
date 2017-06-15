<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'uid'                   => str_random(32),
            'firstName'             => 'Maxime',
            'lastName'              => 'Leclerc',
            'email'                 => 'leclercmaxime14@gmail.com',
            'middleName'            => 'test',
            'password'              =>  Hash::make('123'),
            'address'               => '4 place du test',
            'zipCode'               => '14000',
            'username'              => 'Tensho',
            'city'                  => 'Caen',
            'state'                 => 'Calvados',
            'country'               => 'France',
            'phone'                 => '023155200',
            'mobile'                => '023120100',
            'role'                  => User::ADMIN_ROLE,
            'isActive'              => 1,
            'profileImage'          => ''
        ]);
    }
}
