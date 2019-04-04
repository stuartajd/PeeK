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
<body class="bg-brand" style="height: 100vh;background-color: #620f0f;">
    @yield('content')
</body>
</html>
