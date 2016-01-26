<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        // if ($request->ajax() || $request->wantsJson()) {
        //     return response('Unauthorized.', 401);
        // } else {
        //     // return redirect()->guest('login');
        //     return response('Unauthorized.', 401);
        // }

        if ( ! Auth::guard('api')->user()) {
          return response(['success' => false, 'error' => 'Unauthorized'], 401);
        }


        return $next($request);
    }
}
