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
}
