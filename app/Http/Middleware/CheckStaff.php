<?php

namespace App\Http\Middleware;

use Closure;

class CheckStaff
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role=false)
    {
        if(!$request->user()->staff){
            return redirect('dashboard');
        }

        if($role){
          if(!$request->user()->hasRole($role)){
              return redirect('dashboard');
          }
        }
        return $next($request);
    }
}
