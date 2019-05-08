@extends('layouts.app')

@section('content')
    <div class="container m-auto">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-brand">
                        <div class="text-white text-uppercase text-center">{{ __('Set Password') }}</div>
                    </div>
                    <div class="card-body">
                        <p>Welcome {{$name}}, your account has been created on PeeK.</p>

                        <p>Please set a password below to continue.</p>

                        <form method="POST" action="{{ url('/set-password/'. $password_set_token) }}">
                            @csrf
                            <div class="form-group">
                                <input type="password" name="password" class="form-control">
                            </div>

                            <button type="submit" class="btn btn-brand btn-block">{{ __('Set Password') }}</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
