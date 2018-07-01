
@extends('layouts.app')

@section('content')
    <div class="container main">
        <div class="card mb-4">
            <div class="card-header text-white text-uppercase font-weight-bold bg-dark">
                Information
            </div>

            <div class="card-body">
                <p>The dashboard is used to control critical aspects of PeeK. Use caution when applying new changes, they may have adverse affects.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header text-white text-uppercase font-weight-bold bg-dark">
                System Dashboard
            </div>

            <div class="card-body">
                <div class="row justify-content-center">
                    @if (Auth::user()->staff->permission_user)
                    <div class="col-md-6 my-2">
                        <div class="card py-3 bg-info text-white">
                            <div class="card-body">
                                <a href="" class="text-white">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <h1><i class="fa fa-users"></i></h1>
                                        </div>
                                        <div class="col-md-10">
                                            <h1>User Management</h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    @endif

                    @if (Auth::user()->staff->permission_blog)
                    <div class="col-md-6 my-2">
                        <div class="card py-3 bg-default text-muted">
                            <div class="card-body">
                                <a href="{{route('system.blog.view')}}" class="text-muted">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <h1><i class="fa fa-book"></i></h1>
                                        </div>
                                        <div class="col-md-10">
                                            <h1>Blog Management</h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    @endif

                    @if (Auth::user()->staff->permission_billing)
                    <div class="col-md-6 my-2">
                        <div class="card py-3 bg-secondary text-white">
                            <div class="card-body">
                                <a href="" class="text-white">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <h1><i class="fa fa-balance-scale"></i></h1>
                                        </div>
                                        <div class="col-md-10">
                                            <h1>Billing Management</h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    @endif

                    @if (Auth::user()->staff->permission_system)
                    <div class="col-md-6 my-2">
                        <div class="card py-3 bg-danger text-white">
                            <div class="card-body">
                                <a href="" class="text-white">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <h1><i class="fa fa-user-secret"></i></h1>
                                        </div>
                                        <div class="col-md-10">
                                            <h1>System Management</h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    @endif

                    @if (Auth::user()->staff->permission_audit)
                    <div class="col-md-6 my-2">
                        <div class="card py-3 bg-warning text-white">
                            <div class="card-body">
                                <a href="" class="text-white">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <h1><i class="fa fa-file-text-o"></i></h1>
                                        </div>
                                        <div class="col-md-10">
                                            <h1>Audit Logs</h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    @endif
                </div>
            </div>

        </div>
    </div>

@endsection


 