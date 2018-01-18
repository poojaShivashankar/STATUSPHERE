var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope, $http) {
	alert("hiby");
	$scope.getApplicantInfo = function(applicantName)
	{
	alert("hi");

			var applicantName = 'atuljohn';
	    	$http.get("http://localhost:3000/api/applicantlist/atuljohn").then(function (response) {
	        	$scope.applicant_info = response.data;

			});
	    
	}

});