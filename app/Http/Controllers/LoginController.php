<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redirect;

class LoginController extends Controller
{
    public function index(Request $request)
    {
        return view('login');
    }

    public function redirectToIndex()
    {
        return Redirect(route('Login'));
    }
}
