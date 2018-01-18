// JSON Object for sent notification messages  , This JSON object to be replaced with the one we receive from Mongodb

var packageListObj = [

                      {

                          "PackageName": "Elena",
                          "QuantityAccepted": "2",
                          "QuantityAvailable": "10",
                          "CreatedDate": "01/02/2017",
                          "DateDue": "15/01/2017",
                          "PackageStatus": "shipped",
                          "PackageInfo": "info on product"
                      },
                    {

                        "PackageName": "Elena",
                        "QuantityAccepted": "7",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    },
                    {

                        "PackageName": "Elena",
                        "QuantityAccepted": "5",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    },
                    {

                        "PackageName": "Nick",
                        "QuantityAccepted": "3",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    },
                    {

                        "PackageName": "Carol",
                        "QuantityAccepted": "3",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    }
    ];
var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope,$http) {
    $http.get('http://localhost:3000/api/packagelist').then(function(response) {
            $scope.applicants = response.data; // To be UPdated when there is any data into the database, and all the required fields matches.
        });
    //$scope.names = packageListObj;
});

