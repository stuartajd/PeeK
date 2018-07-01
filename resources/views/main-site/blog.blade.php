
@extends('layouts.main')

@section('content')
    <div class="row justify-content-center page-header" id="blog">
        <div class="col-md-12 my-auto text-white">
            <div class="container">
                <h2>LATEST POSTS</h2>
            </div>
        </div>
    </div>

    <div class="bg-white">
        <div class="container main">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" aria-current="page"><a href="{{route('main')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
            </nav>

            @if (count($posts) === 0)
                <div class="my-5 text-center">
                    <h4>There is nothing just yet!</h4>
                </div>
            @else
                <div class="row">

                @foreach ($posts as $post)
                    <div class="col-md-6">
                        <div class="card mb-2 px-0">
                            <div class="card-body py-1">
                                <div class="text-uppercase text-right mb-1">
                                    @if(($post->type) === "updates")
                                        <span class="badge badge-info"><small>{{$post->type}}</small></span>
                                    @else
                                        <span class="badge badge-secondary"><small>{{$post->type}}</small></span>
                                    @endif
                                </div>

                                <h5 class="card-title">{{$post->title}}</h5>
                            </div>
                            <div class="card-footer text-muted">
                                <div class="row">
                                    <div class="col-md-6">
                                        {{ \Carbon\Carbon::parse($post->created_at)->format('d/m/Y')}}
                                    </div>
                                    <div class="col-md-6">
                                        <a href="{{route('post', ['id'=>$post->id, 'slug'=>$post->slug])}}" class="d-block btn btn-info">Read</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach

                </div>
            @endif

        </div>
    </div>


@endsection


 