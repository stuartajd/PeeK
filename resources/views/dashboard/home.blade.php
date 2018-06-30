@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card">
                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">Outstanding Tasks</div>

                <div class="card-body text-center">
                    <h1>0</h1>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card">
                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">In Progress Tasks</div>

                <div class="card-body text-center">
                    <h1>0</h1>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card">
                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">Completed Tasks <small>This Week</small></div>

                <div class="card-body text-center">
                    <h1>0</h1>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card">
                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">TEAM TOTAL</div>

                <div class="card-body text-center">
                    <h1>0</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
            <div class="card ">
                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
