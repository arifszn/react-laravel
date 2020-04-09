<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function index(Request $request)
    {
        return view('user.lead.index');
    }
}
