<?php

use Illuminate\Database\Seeder;
use App\Post;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);

        $user = User::create([
          'name' => 'Iloveall',
          'email' => 'lovealldevelop@gmail.com',
          'password' => '$2y$10$pZgevN.hLALyinllcBw81ObuLIPcdu6viK74/XT.fOR2r6HeKGxcG',
          'api_token' => 'dSfrnRWFk4BwJLrg3oY9Xn1ViQ3ShC64NZIpHq7oeD7Nh9b6Wk8aWPz56V6L'
        ]);

        $post = Post::create([
          'title' => 'Котик мурмотик',
          'description' => 'Стишочек про зайчика',
          'text' => 'Зайчик мой хороший - умненький красивый, Знает он все коды - коды бутерброды!! Сайтики красивые - всеееем он нарисует, Но а Наську Маську - потом он - утром зацелует'
        ]);

        $post->user()->associate($user);
        $post->save();

    }
}
