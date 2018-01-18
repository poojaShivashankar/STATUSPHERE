var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope,$http) {

    $http.get('http://localhost:3000/api/packagelist').then(function(response) {
            alert("dsagsah");
            $scope.applicants = response.data; // To be UPdated when there is any data into the database, and all the required fields matches.
        });
});
