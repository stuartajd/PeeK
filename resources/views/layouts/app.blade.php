<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'PeeK') }}</title>
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-light mt-5">
    <div class="text-center mb-3 font-weight-bold">
        <h1><img src="{{ secure_asset('PeeK.svg') }}" style="width: 60px" alt="PeeK Logo"> PeeK</h1>
    </div>

    @yield('content')
</body>
</html>
