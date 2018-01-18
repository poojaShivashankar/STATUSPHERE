var app = angular.module("status_app", []);

app.controller("status_ctrl", function ($scope, $http, $window) {
    $scope.usern = $window.sessionStorage.getItem("user_name");

 });