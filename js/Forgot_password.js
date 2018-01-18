var app = angular.module("forgotpass_app", []);
app.controller("forgotpass_ctrl", function ($scope, $http) {


    $scope.forgotpassword = function () {
        //alert($scope.email);
        localStorage.setItem("email", $scope.email);



        var data = JSON.stringify({

            emailid: $scope.email

        })



        $http.post("/api/verificationlist", data).then(function (response) {

            console.log('Data posted successfully');

            if (response.data.bool == 1) {
                window.location.href = "Code.html";
            }

            else {
                    //code added by leena
                           $('#alert_placeholder1').html('<div class="alert alert-danger fade" id="code-alert" style="width:50%; margin:auto;"><button type="button" class="close" data-dismiss="alert">x</button><strong>Sorry! </strong>your email is invalid. Please enter correct email id</div>').alert();
                        $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
                            $("#code-alert").slideUp(500);
                             });
                        //code end by leena
                                //alert("your email is invalid. Please enter correct email id");

            }
        })





    }
});
