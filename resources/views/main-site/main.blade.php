
@extends('layouts.main')

@section('content')
<div class="row main-banner justify-content-center">
    <div class="col-md-md-12 my-auto text-center text-white">
        <h2>Take control of your workflow</h2>
        <p>with PeeK Project Management</p>
        <p><a href="{{ route('login') }}" class="btn btn-outline-light">Login</a> <a href="{{ route('register') }}" class="btn btn-light">Register</a></p>
    </div>
</div>

<div class="block-wrapper row">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title text-info"><i class="fa fa-search"></i></h2>
                        <h3 class="card-subtitle mb-2 text-muted">Quality Assurance</h3>
                        <p class="card-text">Manage all aspects of the QA journey for your company. Ensure all projects are 100% all the time.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title text-info"><i class="fa fa-exclamation-triangle"></i></h2>
                        <h3 class="card-subtitle mb-2 text-muted">Deadline Management</h3>
                        <p class="card-text">Receive alerts when a project is nearing its deadline and isn't complete.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title text-info"><i class="fa fa-users"></i></h2>
                        <h3 class="card-subtitle mb-2 text-muted">Client Sharing</h3>
                        <p class="card-text">Share the project status with clients, unique linking and hiding any internal communications.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="block-wrapper row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1><i class="fa fa-area-chart"></i> Workflows, simplified.</h1>
                <div class="row my-5">
                    <div class="col-md-6 mb-5 text-center">
                        <img src="https://via.placeholder.com/350x500/ffffff/2196f3" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>
                                <h4>See all outstanding projects.</h4>
                                <p>Find out exactly what is awaiting resource, keeping track of all outgoing projects and maintaining quality.</p>
                            </li>
                            <li>
                                <h4>User permissions managed easily.</h4>
                                <p>As a <span class="badge badge-primary">Developer</span> view all your outstanding tasks.</p>
                                <p><span class="badge badge-info">Schedulers</span> assign the task.</p>
                                <p><span class="badge badge-secondary">Clients</span> see the quality.</p>
                                <p>Or just create some of your own..</p>
                            </li>
                            <li>
                                <h4>Track any bug and issues through the QA tracker.</h4>
                                <p>See the full audit history of an asset. Track who, when and what went on. Anytime.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection


 