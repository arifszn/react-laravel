<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getData(Request $request)
    {
        $user = User::where('api_token',$request['api_token'])->first();

        $allLead = Lead::where('user_id', $user->id);
        
        $weeklyLeadCount  = (clone $allLead)->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $monthlyLeadCount = (clone $allLead)->whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])->count();
        $totalLeadsCount  = (clone $allLead)->count();
        $recentLeads      = (clone $allLead)->orderby('created_at', 'desc')->limit(5)->get();
        
        $data['totalLeads']   = $totalLeadsCount;
        $data['weeklyLeads']  = $weeklyLeadCount;
        $data['monthlyLeads'] = $monthlyLeadCount;
        $data['recentLeads']  = $recentLeads;
        
        return response()->json([
            'message' => $data,
            'status'  => 'success'
        ]); 
    }
}
