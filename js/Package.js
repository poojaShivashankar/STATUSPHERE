
/*
Script Name: admin_package.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/
var packageListObj = [

      {
          "Name": "hello",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "04-23-2017",
          "PackageStatus": "accepted"

      },

      {
          "Name": "pollo",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "08-23-2017",
          "PackageStatus": "accepted"

      },

      {
          "Name": "awlo",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "02-23-2017",
          "PackageStatus": "accepted"

      },
      {
          "Name": "llo",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "04-23-2017",
          "PackageStatus": "accepted"


      }

    ]

var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope,$http) {

    //$scope.names = packageListObj;  //Old one 

    // Generally, we expect all the above fields for Packagelist, which , presently not being transferred.
    $http.get('http://localhost:3000/api/packagelist').then(function(response) {
            //$scope.names = response.data; // To be UPdated when there is any data into the database, and all the required fields matches.
            $scope.names = packageListObj;
        });
    
});
