@extends('layouts.app')

@section('content')
<div class="container m-auto">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-brand">
                    <div class="text-white text-uppercase text-center">{{ __('Register') }}</div>
                </div>
                <div class="card-body">
                    <p>You are not able to sign up for an account on PeeK. You must be registered through a Company.</p>

                    <div class="form-group  mb-0">
                        <div class="mt-3">
                            <a href="{{ route('login') }}" class="text-muted">{{ __('Already have an account?') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
