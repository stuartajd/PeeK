<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StateController extends Controller
{
    //
    function getState(){
        return response()->json([
            'user' => $this->user()
        ]);
    }
}
