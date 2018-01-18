var app = angular.module('Startup', []);
app.controller("myctrl", function ($scope, $http) {

    $scope.errormessage = '';
    // Facebook Login
    $scope.FBlogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('http://joinstatus.com/', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    // Twitter Login 
    $scope.twitterLogin = function () {
        alert("Twitter Login");
    }
    // Google Plus Login
    $scope.googleplusLogin = function () {
        // Google's OAuth 2.0 endpoint for requesting an access token

        window.location = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/Statustodo.html&response_type=token&client_id=727180293449-nt9gj5f6tup99q7atce93ip6o5beh78r.apps.googleusercontent.com";

        // Google's OAuth 2.0 endpoint for requesting an access token

        /*
        // Java Script Implementation:    
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {'client_id': '727180293449-nt9gj5f6tup99q7atce93ip6o5beh78r.apps.googleusercontent.com',
                      'redirect_uri': 'http://joinstatus.com/',
                      'response_type': 'token',
                      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                      'include_granted_scopes': 'true',
                      'state': 'pass-through value'};
        // Add form parameters as hidden input values.
        for (var p in params) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);
            input.setAttribute('value', params[p]);
            form.appendChild(input);
        }
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();*/
    }
    // Instagram Login
    $scope.instagramLogin = function () {
        window.location = "https://instagram.com/oauth/authorize/?client_id=2ae73508dca141f891f5f099ce1c6a84&amp;redirect_uri=http://localhost:3000/Statustodo.html&amp;response_type=token";
    }

    /* register function  */
    $scope.formModel = {
        submit: function () {
            //alert("hi");
            if ($scope.formModel.$invalid || $scope.formModel.password != $scope.formModel.password1)
                return false;
            else {


                var data = {
                    username: $scope.formModel.name,
                    email: $scope.formModel.email,
                    password: $scope.formModel.password
                }


                $http.post("/register", data).then(function (response) {
                    console.log('Data posted successfully');
                    console.log(data.username);
                    $scope.register_msg = response.data.message;
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("first_name", "");
                    localStorage.setItem("last_name", "");
                    localStorage.setItem("dob", "");
                    localStorage.setItem("gender", "");
                    localStorage.setItem("instagram_url", "");
                    localStorage.setItem("facebook_url", "");
                    localStorage.setItem("twitter_url", "");
                    localStorage.setItem("snapchat_url", "");
                    localStorage.setItem("youtube_channel", "");
                    localStorage.setItem("website", "");
                    localStorage.setItem("address_line1", "");
                    localStorage.setItem("address_line2", "");
                    localStorage.setItem("country", "");
                    localStorage.setItem("state", "");
                    localStorage.setItem("city", "");
                    localStorage.setItem("zip_Code", "");
                    localStorage.setItem("mob", "");
                    localStorage.setItem("categories", "");
                    window.location.href = "http://localhost:3000/Profile.html";
                },
                function (error) {


                    $scope.register_err = error.data.message;
                    $('#alert_placeholder1').html('<div class="alert alert-danger fade" id="code-alert" style="width:50%; margin:auto;"><button type="button" class="close" data-dismiss="alert">x</button><strong>Sorry! </strong>' + $scope.register_err + '</div>').alert();
                    $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
                        $("#code-alert").slideUp(500);
                    });
                }
                )

            }
        }
    };


    /*Login Function*/

    $scope.login = function () {

        $scope.errormessage = '';
        var data = {
            username: $scope.formLogin.username,
            password: $scope.formLogin.password
        }
        console.log(data.username);
        console.log(data.password);

        $http.post("/login", data).then(function (res) {
            console.log('Data posted successfully');

            $scope.message = res.data.message;

            localStorage.setItem("username", data.username);
            if (res.data.flag == 3) {
                window.location.href = "http://localhost:3000/influencer_info.html";
            }
            if (res.data.flag == 2) {
                window.location.href = "http://localhost:3000/Statustodo.html";

                //$scope.profilemessage=res.data.message;
            }
            else {
                localStorage.setItem("message", res.data.message);
                localStorage.setItem("flag", 1);

                window.location.href = "http://localhost:3000/Profile.html";


            }


        },
                                                function (error) {

                                                    console.log(error.data);
                                                    $scope.errormessage = error.data.message;
                                                    $('#alert_placeholder').html('<div class="alert alert-danger fade" id="code-alert" style="width:50%; margin:auto;"><button type="button" class="close" data-dismiss="alert">x</button><strong>Sorry! </strong>' + $scope.errormessage + '</div>').alert();
                                                    $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
                                                        $("#code-alert").slideUp(500);
                                                    });
                                                }


                                                );

    }



    /*  code added by leena begin    */
    //code to clear model values on reloading model
    $scope.cancel = function () {
        // alert("hello");
        $("#login").modal("hide");
        $scope.formLogin.username = "";
        $scope.formLogin.password = "";
        $scope.errormessage = '';
        $scope.form1.$setPristine();
        //var a=document.getElementById('usern');
        // alert(a);

    };

    $scope.cancelregister = function () {
        //    alert("hello");
        $scope.formModel.name = "";
        $scope.formModel.email = "";
        $scope.formModel.password = "";
        $scope.formModel.password1 = "";
        $scope.register_err = '';
        $scope.theForm.$setPristine();
        //var a=document.getElementById('usern');
        // alert(a);
        $("#signup1").modal("hide");
    };
    /*  code added by leena end    */

});




