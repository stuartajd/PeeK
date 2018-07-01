
@extends('layouts.main')

@section('content')
    <div class="row justify-content-center page-header" id="blog">
        <div class="col-md-12 my-auto text-white">
            <div class="container">
                <h2>ABOUT US</h2>
            </div>
        </div>
    </div>

    <div class="bg-white">
        <div class="container main">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('main')}}">Home</a></li>
                    <li class="breadcrumb-item active">About</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div class="card">
                                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">ABOUT</div>

                                <div class="card-body">
                                    <p>PeeK is the QA and Project Management tool built for any type of business. Take complete control over your workflow within your business.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 mb-3">
                            <div class="card">
                                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">SUPPORT</div>

                                <div class="card-body">
                                    <p>We have multiple channels of support for PeeK.</p>

                                    <p>For general enquiries, please use the mail option on the right.</p>

                                    <p>For support, please use contact our team at <a href="mailto:support@peekpm.com">support@peekpm.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header text-white text-uppercase font-weight-bold bg-dark">STATUS</div>

                                <div class="card-body">
                                    <p>We use exana.io to monitor our infrastructure. Please use the link below to access our system status page.</p>
                                    <a href="https://status.peekpm.com/" target="_blank">status.peekpm.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header text-white text-uppercase font-weight-bold bg-dark">SOCIAL CHANNELS</div>

                        <div class="card-body">

                            <div><a href="mailto:enquiry@peekpm.com" class="d-block btn btn-lg text-white" style="background-color: #ff5722;"><i class="fa fa-envelope"></i></a></div>
                            <br />
                            <div><a href="https://facebook.com/peekPM" class="d-block btn btn-lg text-white" style="background-color: #3B5998;"><i class="fa fa-facebook"></i></a></div>
                            <br />
                            <div><a href="https://twitter.com/peekPM" class="d-block btn btn-lg text-white" style="background-color: #1DA1F2;"><i class="fa fa-twitter"></i></a></div>

                        </div>
                    </div>
                </div>
            </div>





        </div>
    </div>


@endsection


 