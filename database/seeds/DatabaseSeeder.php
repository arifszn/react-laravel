<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $testUser = User::create([
            'name' => 'John Doe',
            'email' => 'demo@example.com',
            'password' => bcrypt('12345'),
            'api_token' => Str::random(80)
        ]);
    }
}
