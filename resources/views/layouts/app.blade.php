<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'PeeK') }}</title>

    @if (env('APP_ENV')=='production')
        <script src="{{ secure_asset('js/app.js') }}" defer></script>
        <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
    @else
        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @endif

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/dashboard') }}">
                    {{ config('app.name', '"PeeK - Project Management and Quality Assurance Tracker"') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <ul class="navbar-nav ml-auto">
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                        @else
                            @if (Auth::user()->staff)
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('system') }}"><i class="fa fa-user-secret"></i> {{ __('System')}}</a>
                                </li>
                            @endif

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <i class="fa fa-user-o"></i> {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <div class="w-50 mx-auto">
                                        <img class="rounded img-fluid d-block" src="https://via.placeholder.com/250x250/eeeeee">
                                    </div>

                                    <hr class="mt-2 mb-0" />
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>

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
    </div>
</body>
</html>
