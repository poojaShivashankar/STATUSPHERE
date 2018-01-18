var app = angular.module("reset_pwd_app", []);
app.controller("reset_pwd_ctrl", function ($scope, $http) {
    $scope.email = localStorage.getItem("email");
    $scope.pass_reset = {


        click: function () {
            if ($scope.pass_reset.$invalid || $scope.pass_reset.pass != $scope.pass_reset.pass1)
                return false;
            else {
                var data = JSON.stringify({

                    password: $scope.pass_reset.pass

                })
                $http.put("/api/influencerlist/reset/" + $scope.email, data).then(function (response) {

                    if (response.data.passreset == true) {
                        alert("password updated successfully");
                        window.location.href = "Startup.html";
                    }
                    else {
                        alert("password not updated successfully");
                    }
                })

            }
        }
    };

});
