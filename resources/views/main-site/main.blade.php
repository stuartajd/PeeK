
@extends('layouts.main')

@section('content')

<div class="row align-items-center main-banner" style="background-color: blue;" >
    <div class="col-md-12 text-center">
        <div class="row justify-content-center">
            <div class="col-md-3 text-white">
                <div class="my-5" >
                    <img src="{{asset('img/logos/PeeK_Transparent.png')}}" class="img-fluid">
                </div>

                <h1>We are PeeK.</h1>
                <p>Bring your <em>Quality Assurance</em> together.<br /><em>Elevate your workflow</em>.</p>

                <div class="my-5">
                    <a href="#" class="btn btn-outline-light">Discover</a>
                </div>
            </div>
        </div>

    </div>
</div>

<style>
    .main-banner {
        background: rgb(35,64,122);
        background: -moz-linear-gradient(90deg, rgba(35,64,122,1) 0%, rgba(0,211,255,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(35,64,122,1) 0%, rgba(0,211,255,1) 100%);
        background: linear-gradient(90deg, rgba(35,64,122,1) 0%, rgba(0,211,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#23407a",endColorstr="#00d3ff",GradientType=1);
    }
</style>

<div class="block-wrapper bg-white row">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title text-primary"><i class="fa fa-search"></i></h2>
                        <h3 class="card-subtitle mb-2 text-muted">Quality Assurance</h3>
                        <p class="card-text text-muted">Manage all aspects of the QA journey for your company. Ensure all projects are 100% all the time.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title text-primary"><i class="fa fa-exclamation-triangle"></i></h2>
                        <h3 class="card-subtitle mb-2 text-muted">Deadline Management</h3>
                        <p class="card-text text-muted">Receive alerts when a project is nearing its deadline and isn't complete.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title text-info"><i class="fa fa-users"></i></h2>
                        <h3 class="card-subtitle mb-2 text-muted">Client Sharing</h3>
                        <p class="card-text text-muted">Share the project status with clients, unique linking and hiding any internal communications.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="block-wrapper row">
    <div class="container py-5">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1><i class="fa fa-area-chart"></i> Your Workflows, simplified.</h1>


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


 