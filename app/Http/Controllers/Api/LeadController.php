<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function listData(Request $request)
    {
        $paginate = $request['paginate'];

        $leads = Lead::where('user_id', 12)
                        ->paginate($paginate);

        return response()->json([
            'message' => $leads,
            'email' => 'success'
        ]); 
    }
}
