
@extends('layouts.app')

@section('content')
    <div class="container main">
        <div class="row">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header text-white text-uppercase font-weight-bold bg-dark">
                        Blog Management
                    </div>

                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="card-body">
                        <table class="table">
                            <thead class="thead-dark">
                            <tr>
                                <th width="5%">#</th>
                                <th scope="col">Title</th>
                                <th width="5%"></th>
                            </tr>
                            </thead>
                            <tbody>
                            @if(!count($posts))
                                <tr>
                                    <td colspan="3" class="text-center">
                                        No posts to display.
                                    </td>
                                </tr>
                            @endif
                            @foreach($posts as $post)
                                <tr>
                                    <th scope="row">{{$post->id}}</th>
                                    <td>{{$post->title}}</td>
                                    <td>
                                        {!! Form::open(['route' => ['system.blog.delete', $post->id], 'method' => 'delete']) !!}
                                        {!! Form::submit('Delete', ['class'=>['btn', 'btn-danger', 'btn-sm']]) !!}
                                        {!! Form::close() !!}
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header text-white text-uppercase font-weight-bold bg-dark">
                        Blog Management
                    </div>

                    <div class="card-body">
                        <a href="{{route('system.blog.create')}}" class="btn btn-success d-block"><i class="fa fa-pencil"></i>&nbsp;&nbsp;Write Blog Post</a>
                    </div>
                </div>
            </div>
        </div>


    </div>

@endsection


 