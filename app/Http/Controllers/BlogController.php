<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;


class BlogController extends Controller
{
    public function index(){
        $posts = Post::orderBy('created_at', 'desc')->get();

        return view('main-site.blog')->with(['posts'=>$posts]);
    }

    public function read($id, $slug){
        $post = Post::where('id', $id)->first();
        return view('main-site.blog-read')->with(['post'=>$post]);
    }
}
