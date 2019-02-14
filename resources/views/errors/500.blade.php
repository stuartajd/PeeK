@extends('layouts.app')

@section('content')
	<div class="container m-auto">
		<div class="row justify-content-center">
			<div class="col-md-4">
				<div class="card">
					<div class="card-header bg-brand">
						<div class="text-white text-uppercase text-center">{{ __('Something went wrong') }}</div>
					</div>
					<div class="card-body text-center">
						@if(app()->bound('sentry') && !empty(Sentry::getLastEventID()))
							<div class="subtitle">Error ID: {{ Sentry::getLastEventID() }}</div>

							<!-- Sentry JS SDK 2.1.+ required -->
							<script src="https://cdn.ravenjs.com/3.3.0/raven.min.js"></script>

							<script>
								Raven.showReportDialog({
									eventId: '{{ Sentry::getLastEventID() }}',
									// use the public DSN (dont include your secret!)
									dsn: 'https://36d4c44df36f4ce6b82be17a5b8724ae@sentry.io/1352158',
									user: {
										'name': 'Jane Doe',
										'email': 'jane.doe@example.com',
									}
								});
							</script>
						@endif
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
