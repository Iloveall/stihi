<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use App\Post;
use App\User;

class PostController extends Controller
{

    protected $user;

    public function __construct()
    {
      $this->user = Auth::guard('api')->user();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Post::with('user')->orderBy('id', 'desc')->get();

        return response()->json([
          'success' => true,
          'data' => [
            'posts' => $post
          ]
        ], 200);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
      $post = Post::create($request->all());
      $post->user()->associate($this->user);
      $post->save();

      return response()->json([
        'success' => true,
        'data' => [
          'post' => $post->with('user')->orderBy('id', 'desc')->first()
        ],
        'messages' => [
          'Новый стишок успешно добавлен :)'
        ]
      ], 200);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

      $post = Post::find($id);

      return response()->json([
        'success' => true,
        'data' => [
          'post' => $post
        ]
      ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $post = Post::whereHas('user', function($q)
        {
          $q->where('id', 2);
        })->where('id', $id)->get()->first();

        if (empty($post)) {
          return response()->json([
            'success' => false,
            'errors' => [
              'Not user'
            ]
          ], 200);
        };

        $post->fill($request->only(['title', 'description', 'text']));
        $post->push();

        return response()->json([
          'success' => true,
          'data' => [
            'post' => $post
          ]
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::whereHas('user', function($q)
        {
          $q->where('id', 1);
        })->where('id', $id)->get()->first();

        $post->delete();

        return response()->json([
          'success' => true,
        ], 200);
    }
}
