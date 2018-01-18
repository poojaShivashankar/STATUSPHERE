var app = angular.module("status_app", []);

app.controller("status_ctrl", function ($scope, $http, $window) {
 

    $http.get('/Json/Profile.json').then(function (response) {

        $scope.userinfo = response.data.userinfo;


    });


});