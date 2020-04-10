<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Auth;
use Illuminate\Http\Request;
use Redirect;
use Faker\Provider\Lorem;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        return view('user.dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect(route('Login'));
    }

    public function test()
    {
        /* for ($i=0; $i < 12; $i++) { 

            Lead::create([
                'name' => 'name'.$i,
                'email' => 'name'.$i.'@yopmail.com',
                'phone' => rand(1, 9).rand(1, 7).$i,
                'description' => 'dssad sdjfdsh fdshsdfh fdsjsdn',
                'user_id' => 12
            ]);
        }
        dd('dasdas'); */
        $paginate = 2;

        $leads = Lead::where('user_id', 12)
                        ->paginate($paginate);
        return view('test')->with('leads', $leads);

    }
}
