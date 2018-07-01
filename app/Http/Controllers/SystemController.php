<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Post;
use Purifier;

class SystemController extends Controller
{
    //
    public function index(){
        return view('dashboard.system.system');
    }

    public function blog_view(){
        $posts = Post::all();
        return view('dashboard.system.blog.view')->with(['posts'=>$posts]);
    }

    public function blog_create_view(){
        return view('dashboard.system.blog.create');
    }

    public function blog_create(Request $request){
        $post = new Post;

        $post->title = $request->post_title;
        $post->post = Purifier::clean($request->post_content);
        $post->type = $request->post_type;
        $post->author = Auth::user()->id;
        $post->slug = str_slug(str_limit($request->post_title, 30), '-');

        $post->save();

        return redirect(route('system.blog.create'))->with(['status'=>$request->post_title .' published.', 'id'=>$post->id, 'slug'=>$post->slug]);
    }

    public function blog_delete($id){
        $post = Post::where('id', $id)->first();
        $title = $post->title;
        $post->delete();

        return redirect(route('system.blog.view'))->with(['status'=>$title .' deleted.']);
    }
}
