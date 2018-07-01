
@extends('layouts.main')

@section('content')
    <div class="row justify-content-center page-header" id="blog">
        <div class="col-md-12 my-auto text-white">
            <div class="container">
                <h2>OUR PLANS</h2>
            </div>
        </div>
    </div>

    <div class="bg-white">
        <div class="container main">

            <div class="card-deck">
                <div class="card">
                    <div class="card-header text-white font-weight-bold text-center bg-dark">
                        <h4>FREELANCER</h4>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-center">£0 <span class="text-muted"><small>/ mo</small></span></h2>
                        <p class="card-text">
                            Everything you need to kickstart your project.
                        </p>
                        <br />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">5 User Accounts</li>
                            <li class="list-group-item">1 Connectors</li>
                            <li class="list-group-item">50 Projects</li>
                            <li class="list-group-item">&nbsp;</li>
                        </ul>
                    </div>
                    <div class="card-body text-center">
                        <a href="#" class="btn btn-outline-primary d-block">REGISTER</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header text-white font-weight-bold text-center bg-dark">
                        <h4>TEAM</h4>

                        <div class="ribbon blue"><span>Popular</span></div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-center">£5 <span class="text-muted"><small>/ mo</small></span></h2>
                        <p class="card-text">
                            Recommended for small teams, control all aspects of your flow.
                        </p>
                        <br />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">25 User Accounts</li>
                            <li class="list-group-item">2 Connectors</li>
                            <li class="list-group-item">150 Projects</li>
                            <li class="list-group-item">Custom CNAME</li>
                        </ul>
                    </div>
                    <div class="card-body text-center">
                        <a href="#" class="btn btn-outline-success d-block">PURCHASE</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header text-white font-weight-bold text-center bg-dark">
                        <h4>ENTERPRISE</h4>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-center">
                            £25 <span class="text-muted"><small>/ mo</small></span></h2>
                        <p class="card-text">
                            Recommended for small teams, control all aspects of your flow.
                        </p>
                        <br />
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Unlimited User Accounts</li>
                            <li class="list-group-item">5 Connectors</li>
                            <li class="list-group-item">Unlimited Projects</li>
                            <li class="list-group-item">Custom CNAME</li>
                        </ul>
                    </div>
                    <div class="card-body text-center">
                        <a href="#" class="btn btn-outline-success d-block">PURCHASE</a>
                    </div>
                </div>
            </div>

            <br />

            <div class="text-center">
                <h5>Need something more specific? Contact us: <a href="mailto:support@peekpm.com" target="_blank">support@peekpm.com</a></h5>
            </div>

        </div>
    </div>


@endsection


 