@extends('layouts.app')

@section('content')
<div class="container m-auto">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-brand">
                    <div class="text-white text-uppercase text-center">{{ __('Sign In') }}</div>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                        @csrf

                        <div class="form-group">
                            <label for="email" class="text-muted">{{ __('Email Address') }}</label>
                            <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">
                            <label for="password" class="text-muted">{{ __('Password') }}</label>
                            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                            @if ($errors->has('password'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" name="remember" class="custom-control-input" id="rememberMe" {{ old('remember') ? 'checked' : '' }}>
                                <label class="custom-control-label" for="rememberMe">{{ __('Remember Me') }}</label>
                            </div>
                        </div>

                        <div class="form-group  mb-0">
                            <button type="submit" class="btn btn-brand w-100">
                                {{ __('Login') }}
                            </button>

                            <div class="mt-3">
                                <a href="{{ route('password.request') }}" class="text-muted">{{ __('Forgot Your Password?') }}</a>
                            </div>
                        </div>
                    </form>

                    <hr>

                    <div class="text-left">
                        {{--<a href="{{ url('/login/facebook') }}" class="btn btn-block text-left btn-social btn-facebook"> Sign in with Facebook</a>--}}
                        <a href="{{ url('/login/microsoft') }}" class="btn btn-block text-left btn-social btn-microsoft"> Sign in with Microsoft</a>
                        <a href="{{ url('/login/google') }}" class="btn btn-block text-left btn-social btn-google"> Sign in with Google</a>
                    </div>
                </div>
            </div>
            <div class="my-3 text-center">
                <a href="{{ route('register') }}" class="text-muted">{{ __('Don\'t have an account? Sign Up') }}</a>
            </div>

        </div>
    </div>
</div>
@endsection
