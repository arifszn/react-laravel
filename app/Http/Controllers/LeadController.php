<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function index(Request $request)
    {
        return view('user.lead.index');
    }
}
