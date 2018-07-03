<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PeeK - Project Management and Quality Assurance Tracker</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

        @if (env('APP_ENV')=='production')
            <script src="{{ secure_asset('js/app.js') }}" defer></script>
            <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
        @else
            <script src="{{ asset('js/app.js') }}" defer></script>
            <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        @endif

        <style>
            .main-banner{
                background: #203047 url({{asset('img/main-header.jpg')}}) center center no-repeat;
            }

        </style>
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-overlay navbar-dark position-absolute w-100">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'PeeK') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('main.about') }}">{{ __('About') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('blog') }}">{{ __('Blog') }}</a>
                        </li>
                        {{--<li class="nav-item">--}}
                            {{--<a class="nav-link" href="{{ route('main.plans') }}">{{ __('Plans') }}</a>--}}
                        {{--</li>--}}
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                        @else
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('home') }}">{{ __('Dashboard') }}</a>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            @yield('content')
        </div>

        <footer>
            <div class="upper">
                <div class="container py-5">
                    <div class="row text-muted">
                        <div class="col-md-3 text-justify">
                            <strong>ABOUT PEEK</strong>
                            <p>PeeK is the QA and Project Management tool built for any type of business. Take complete control over your workflow within your business.</p>
                        </div>
                        <div class="col-md-6">
                            <strong>RECENT BLOG POSTS</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque architecto eligendi quia necessitatibus incidunt modi cum quos ut inventore consequuntur expedita, voluptatum pariatur nemo illum, nihil maxime tempore itaque earum.</p>
                        </div>
                        <div class="col-md-3">
                            <strong>TERMS</strong>
                            <p>Terms and Conditions<br />Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lower text-muted text-uppercase py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            &copy; 2018 - PeeK. All rights reserved.
                        </div>

                        <div class="col-md-6 text-right">
                            <p><strong>STATUS</strong>: <i class="fa fa-circle text-success"></i> All services online.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
