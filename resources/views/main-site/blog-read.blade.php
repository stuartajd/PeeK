
@extends('layouts.main')

@section('content')
    <div class="row justify-content-center page-header" id="blog">
        <div class="col-md-12 my-auto text-white">
            <div class="container">
                <h2>{{$post->title}}</h2>
            </div>
        </div>
    </div>

    <div class="bg-white">
        <div class="container main">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('main')}}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{route('blog')}}">Blog</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$post->title}}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header text-right text-white text-uppercase font-weight-bold bg-dark">Posted by: XXX - {{ \Carbon\Carbon::parse($post->created_at)->format('d/m/Y')}}</div>

                        <div class="card-body">
                            {{$post->post}}
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-header text-right text-white text-uppercase font-weight-bold bg-dark">SHARE</div>

                        <div class="card-body text-center">
                            <h4>
                                <a href="https://www.facebook.com/sharer/sharer.php?u={{urlencode(url()->current())}}" target="_blank"><i class="fa fa-facebook" style="color: #2274b9"></i></a>&nbsp;&nbsp;
                                <a href="https://twitter.com/home?status={{urlencode($post->title ." - ". url()->current())}}" target="_blank"><i class="fa fa-twitter" style="color: #4d9ed8"></i></a>&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/shareArticle?mini=true&url={{url()->current()}}&title={{$post->title}}&summary={{$post->post}}" target="_blank"><i class="fa fa-linkedin" style="color: #2274b9"></i></a>&nbsp;&nbsp;
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection


 