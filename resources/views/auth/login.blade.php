@extends('layouts.app')

@section('content')
<div class="container h-100">
    <div class="row  h-100 justify-content-center align-items-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="text-center mb-3 py-2 font-weight-bold">
                                <h1><img src="{{ secure_asset('PeeK.svg') }}" style="width: 60px" alt="PeeK Logo"> PeeK</h1>
                            </div>

                            <div class="text-center">
                                <h5>Project Management</h5>
                                    <p>Enter your details to access the PeeK platform.</p>
                            </div>

                            <div class="alert alert-danger">The PeeK platform is currently in development and is not complete, some features may not work as expected.</div>
                        </div>
                        <div class="col-md-6">
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
                                <a href="{{ url('/login/azure') }}" class="btn btn-block text-left btn-social btn-microsoft"> Sign in with Microsoft</a>
                                <a href="{{ url('/login/google') }}" class="btn btn-block text-left btn-social btn-google"> Sign in with Google</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
