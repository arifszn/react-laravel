<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Redirect;
use Session;
use Tegimus\IziToast\Toast;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function accessDenied($route, $message = 'Something went wrong.')
    {
        $toast = $this->createToasterNotification($message, 'error');

        Session::flash('error-toaster', $toast);
        return Redirect::route($route);
    }

    public function createToasterNotification($message = '', $type = 'error', $title = '', $options = null)
    {
        if (!$options) {
            $options = [
                'progressBar'   => true,
                'theme'         => 'dark',
                'position'      => 'topRight',
                'color'         => $type == 'error' ? '#565c70' : '#565c70',
                'messageColor'  => $type == 'error' ? '#ffafb4' : '#00ffb8',
                'messageSize'   => 12
            ];
        }
        
        return Toast::make($message, $title, $type, $options);
    }
}
