@extends('layouts.app')

@section('content')
	<div class="container m-auto">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<div class="card">
					<div class="card-header bg-brand">
						<div class="text-white text-uppercase text-center">{{ __('Account') }}</div>
					</div>
					<div class="card-body text-center">
						<p>You currently do not have an account on PeeK.<br /><br />
							Please contact an administrator to request your account creation.</p>

						<a href="{{ route('login') }}" class="btn btn-brand btn-block">{{ __('Login') }}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
