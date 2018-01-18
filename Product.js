/*
Script Name: admin_package.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/
//alert("Adding Product sajdjhsagdshajgdhsg");
var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope,$http) {

    alert("dsakdhsakdhsakj");

    $scope.createProduct = function()
    {
      alert("Create Product");
    }

   
    // Generally, we expect all the above fields for Packagelist, which , presently not being transferred.
    /*$http.get('http://localhost:3000/api/productlist').then(function(response) {
            $scope.names = response.data; // To be UPdated when there is any data into the database, and all the required fields matches.
           
        });*/
    
});