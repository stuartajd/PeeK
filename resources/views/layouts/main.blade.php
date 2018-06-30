<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PeeK - Project Management</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400" rel="stylesheet">

        <style>
            body{
                background-color: #eeeeee;
                font-family: "Poppins", Arial, sans-serif;
            }

            h1,h2,h3,h4,h5,h6 {
                font-family: "Nunito", Arial, sans-serif;
            }

            h2 {
                font-size: 45px;
            }

            .main-banner {
                min-height: 35em;
                background-color: #2196f3;
                background: url('img/main-header.jpg') center center no-repeat;
                background-size: cover;
            }

            .btn {
                min-width: 10em;
            }

            .main-banner p {
                font-size: 22px;
            }
            
            .block-wrapper {
                padding: 2em 0;
            }
    
            .block-wrapper:nth-child(even) {
                border: 1px solid #e6e6e6;
                background-color: white;
            }

            .block-wrapper:nth-child(odd){
                background-color: #2196f3;
                color: white!important;
            }

            .block-wrapper .card{
                border: 0;
            }

            .upper {
                background-color: #303133;
            }
            .lower {
                background-color: #262626;
            }
        </style>
    </head>
    <body>
        <div class="container-fluid">
            @yield('content')
        </div>

        <footer>
            <div class="upper">
                <div class="container py-5">
                    <div class="row text-muted">
                        <div class="col-md-3 text-justify">
                            <strong>ABOUT PEEK</strong>
                            <p>PeeK is the QA and Project Management tool built for any type of business. Take complete control over your workflow within your business.</p>
                        </div>
                        <div class="col-md-6">
                            <strong>RECENT BLOG POSTS</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque architecto eligendi quia necessitatibus incidunt modi cum quos ut inventore consequuntur expedita, voluptatum pariatur nemo illum, nihil maxime tempore itaque earum.</p>
                        </div>
                        <div class="col-md-3">
                            <strong>TERMS</strong>
                            <p>Terms and Conditions<br />Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lower text-muted text-uppercase py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                             &copy; 2018 - PeeK. All rights reserved.
                        </div>

                        <div class="col-md-3">
                            <p><strong>STATUS</strong>: <i class="fa fa-circle text-success"></i> All services online.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
