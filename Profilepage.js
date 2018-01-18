var app = angular.module("appProfile", []);
app.controller('ctrlProfile', function ($scope, $http, $window) {

    $scope.usern = localStorage.getItem("username");
    $scope.message=localStorage.getItem("message");
    $scope.flag=localStorage.getItem("flag");


    if($scope.flag==1)
    { 
        $('#alert_placeholder3').html('<div class="alert alert-danger fade" id="code-alert" style="width:50%; margin:auto;"><button type="button" class="close" data-dismiss="alert">x</button><strong>Sorry! </strong>' + $scope.message + '</div>').alert();
        $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#code-alert").slideUp(500);
        });
    }


    $http.get('/Json/Countries.json').then(function (response) {

        $scope.countries = response.data.countries;
    });
    $http.get('/Json/States.json').then(function (response) {

        $scope.states = response.data.states;
    });
    $scope.GetSelectedCountry = function () {

        $scope.strCountry = $scope.selectCountry;
    };


    //code added by leena for edit profile
    $scope.fn=localStorage.getItem("first_name");
    $scope.ln= localStorage.getItem("last_name");
    //$scope.dob=localStorage.getItem("dob");
    $scope.sex=localStorage.getItem("gender");
    $scope.insta=localStorage.getItem("instagram_url");
    $scope.fb=localStorage.getItem("facebook_url");
    $scope.tweet=localStorage.getItem("twitter_url");
   // alert(localStorage.getItem("snapchat_url"));
   $scope.sc=localStorage.getItem("snapchat_url");
   
    
   $scope.yc=localStorage.getItem("youtube_channel");
    $scope.blog=localStorage.getItem("website");
    $scope.addr1= localStorage.getItem("address_line1");
    $scope.addr2=localStorage.getItem("address_line2");    
    //$scope.selectCountry = localStorage.getItem("country");
    //$scope.selectstate.name=localStorage.getItem("state");
    $scope.city=localStorage.getItem("city");
    $scope.zip=localStorage.getItem("zip_Code");
     $scope.phno=localStorage.getItem("mob");

    //$scope.theForm.$setPristine();

    //code end by leena

    $scope.someSelected = function (object) {
        if (!object) return false;
        return Object.keys(object).some(function (key) {
            return object[key];
        });
    }

    $scope.doTouched = function () {
        $scope.theForm.subscribe.$setTouched();
    }
    $scope.updateProfile = function()
    {
        var checked = $('.form-check-input:checked').map(function () {
            return this.value;
        }).get();
        if (checked.length) {
            //console.log(checked);
            $scope.selected = checked;
            //categories: checked;
        } else {
            console.log('null');
        }
      
        $scope.selected;
        var data = {
            image_url: $scope.myFile,
            firstname: $scope.fn,
            lastname: $scope.ln,
            dob: $scope.dob,
            gender: $scope.sex,
            instagram_url: $scope.insta,
            facebook_url: $scope.fb,
            twitter_url: $scope.tweet,
            snapchat_url: $scope.sc,
            youtubechannel: $scope.yc,
            Blog: $scope.blog,
            AddressLine1: $scope.addr1,
            AddressLine2: $scope.addr2,
            Country: $scope.selectCountry.name,
            State: $scope.selectstate.name,
            City: $scope.city,
            ZIPCode: $scope.zip,
            mob: $scope.phno,
            username:$scope.usern,
            
            categories: $scope.selected


        }
            



           // alert($scope.success);
            //code added by leena for popup                     
             
              $scope.editProfileFlag = localStorage.getItem("editProfileFlag");
              if($scope.editProfileFlag==1)
              {

                    $http.post("/editinfluencer_profile", data).then(function (response) {
                    console.log('Data posted successfully');
                    var confirm_message="Your profile has been updated sucessfully!!";
                    confirmDialog(confirm_message, function () {
                    localStorage.setItem("editProfileFlag", 0);
                    window.location.href = "http://localhost:3000/Statustodo.html";
              })
                },

                    function (error) {

                                //$scope.errorm = error.data.message ;
                                alert(error.data.message);
                                //alert($scope.errorm);
                            })

                    
              }
              else
              {

                 $http.post("/editProfile", data).then(function (response) {
                    console.log('Data posted successfully');
                     $scope.success=response.data.message;
                    var confirm_message=$scope.success;
                    confirmDialog(confirm_message, function () {

                    window.location.href = "http://localhost:3000/Startup.html";
                     })
                 },
                            function (error) {

                                //$scope.errorm = error.data.message ;
                                alert(error.data.message);
                                //alert($scope.errorm);
                            })

             }
              
                        

            //code end by leena for popup
            
        
            //window.location.href = "http://localhost:3000/Startup.html";                
       
    }

    /* code added by leena for popup */
    // var confirm_message = "Do you want to add this product? If you click on 'OK' button, the product will be added to  your to-do list";
    function confirmDialog(message, onConfirm) {
        // $("addbox").disabled = true;
        var fClose = function () {

            modal.modal("hide");
        };
        var modal = $("#confirmPopup");
        modal.modal("show");
        $("#confirmMessage").empty().append(message);
        $("#confirmOk").one('click', onConfirm);
        $("#confirmOk").one('click', fClose);
       // $("#confirmCancel").one("click", fClose);

        
    }

    /* code end by leen */
   
/*logout*/
$scope.logout = function (event) {
    localStorage.clear();        
    window.location.href = "http://localhost:3000/Startup.html";
};

        $(document).ready(function () {
            function disableBack() { window.history.forward() }

            window.onload = disableBack();
            window.onpageshow = function (evt) {
                if (evt.persisted) disableBack()
            }
       
       
        });
    });



   

    app.directive('myUpload', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.image = e.target.result;
                    scope.$apply();
                }

                elem.on('change', function () {
                    reader.readAsDataURL(elem[0].files[0]);
                });
            }
        };
    }]);

    app.directive('validFile', function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                var validFormats = ['jpg', 'jpeg', 'png'];
                elem.bind('change', function () {
                    validImage(false);
                    scope.$apply(function () {
                        ngModel.$render();
                    });
                });
                ngModel.$render = function () {
                    ngModel.$setViewValue(elem.val());
                };
                function validImage(bool) {
                    ngModel.$setValidity('extension', bool);
                }
                ngModel.$parsers.push(function (value) {
                    var ext = value.substr(value.lastIndexOf('.') + 1);
                    if (ext == '') return;
                    if (validFormats.indexOf(ext) == -1) {
                        return value;
                    }
                    validImage(true);
                    return value;
                });
            }
        };
    });








