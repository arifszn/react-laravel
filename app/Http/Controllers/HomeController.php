<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use Redirect;

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
