<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;


class BlogController extends Controller
{
    public function index(){
        $posts = Post::all();

        return view('main-site.blog')->with(['posts'=>$posts]);
    }

    public function read($id, $slug){
        $post = Post::where('slug', $slug)->first();
        return view('main-site.blog-read')->with(['post'=>$post]);
    }
}
