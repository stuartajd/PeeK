
@extends('layouts.app')

@section('content')

    <div class="container main">
        <div class="card">
            <div class="card-header text-white text-uppercase font-weight-bold bg-dark">
                Create Blog Post
            </div>

            @if (session('status'))
                <div class="alert alert-success">
                    {{ session('status') }}

                    @if (session('id'))
                        &nbsp;&nbsp;&nbsp;<a href="{{route('post', ['id'=>session('id'), 'slug'=>session('slug')])}}" class="btn btn-sm btn-info">Read</a>
                    @endif
                </div>
            @endif

            <div class="card-body">
                {!! Form::open(['route' => 'system.blog.create.post', 'method' => 'post']) !!}

                <div class="form-group">
                    {!! Form::label('Post Title') !!}
                    {!! Form::text('post_title', '', ['class' => 'form-control', 'required'=>true, 'placeholder'=>'Post Title'] ) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('Post Content') !!}
                    {!! Form::textarea('post_content', '', ['class' => 'form-control', 'required'=>true, 'placeholder'=>'Post Content', 'style'=>'min-height: 200px;'] ) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('Post Type') !!}
                    {!! Form::select('post_type', ['updates'=>'Updates', 'news'=>'News'], null, [ 'required'=>true,'class'=>'form-control']) !!}
                </div>

                <div class="alert alert-warning">
                    <p>This post will display as created by: {{Auth::user()->name}}.</p>
                </div>

                <div class="form-group">
                    {!! Form::submit('Post Content', ['class'=>['btn', 'btn-success']]) !!}
                </div>

                {!! Form::close() !!}
            </div>
        </div>
    </div>

@endsection


 