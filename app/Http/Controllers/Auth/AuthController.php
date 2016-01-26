<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator($data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  Request $request
     * @return User
     */
    protected function create(Request $request)
    {

      $input = (array)$request->all();

      $validator = $this->validator($input);

      if ($validator->fails())
      {

        return response()->json([
          'success' => false,
          'errors' => $validator->errors()->all()
        ], 404);

      }

      $user = User::create([
          'name' => $request->input('name'),
          'email' => $request->input('email'),
          'password' => bcrypt($request->input('password')),
          'api_token' => str_random(60)
      ]);

      return response()->json([
        'success' => true,
        'data' => [
          'user' => $user
        ],
        'messages' => [
          'Кабинет успешно создан. Теперь попробуйте войти и написать свой первый стишок :)'
        ]
      ], 200);

    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @return boolean
     */
    protected function isAuth()
    {

      $user = Auth::guard('api')->user();

      if (!empty($user))
      {
        return response()->json([
          'success' => true,
          'data' => ['user' => $user]
        ], 200);
      }

      return response()->json([
        'success' => false,
      ], 401);

    }

    /**
     * Auth user.
     *
     * @param json $data
     * @return boolean
     */
    protected function auth(Request $request)
    {
      if (Auth::attempt(['email' => $request->email, 'password' => $request->password]))
      {
        return response()->json([
          'success' => true,
          'user' => Auth::user(),
          'messages' => [
            'Авторизация прошла успешно :)'
          ]
        ], 200);
      }

      return response()->json([
        'success' => false,
        'errors' => [
          'Друг мой, вы ввели не верный логин или пароль, попробуйте еще разок ;)'
        ]
      ], 401);

    }

}
