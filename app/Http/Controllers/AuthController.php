<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Validator;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        return view('user.login');
    }

    public function redirectToIndex()
    {
        return Redirect(route('Login'));
    }
    
    public function signup(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors(),
                'status' => 'validation-error'
            ], 401);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'api_token' => Str::random(80),
        ]);
        $user->save();
        
        $token = Str::random(80);

        $user->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        $credentials = request(['email', 'password']);
        
        if(!Auth::guard('users')->attempt($credentials))
            return response()->json([
                'message' => 'Invalid email or password',
                'status' => 'error'
            ], 401);
        
        return response()->json([
            'message' => $user->api_token,
            'status' => 'success'
        ], 201);
    }
  
    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => $validate->errors(),
                'status' => 'validation-error'
            ], 401);
        }

        $credentials = request(['email', 'password']);
        
        if(!Auth::guard('users')->attempt($credentials))
            return response()->json([
                'message' => 'Invalid email or password',
                'status' => 'error'
            ], 401);
        $user = $request->user();
        
        return response()->json([
            'message' => $user->api_token,
            'status' => 'success'
        ], 201);
    }
  
    public function logout(Request $request)
    {
    }
  
    
    public function user(Request $request)
    {
        return response()->json([
            'message' => $request->user(),
            'status' => 'success'
        ]);
    }
}
