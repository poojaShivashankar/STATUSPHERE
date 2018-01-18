var appTodolist = angular.module("status_app", []);

appTodolist.controller("status_ctrl", function ($scope, $http, $window) {

    $scope.usern = localStorage.getItem("username");
    $http.get("/json/todolist.json").then(function (response) {          //Read json file
        $scope.todolist = response.data.todolist;
    });
    /*,
            function (error) {
                // Handle error here
                console.log(error.data);
                alert(error.data.message);
            }
    );*/
    // alert("hi");
    var data= {username: $scope.usern}
    $http.post("/influencer_profile",data).then(function (response) {
        $scope.userinfo = response.data.influencer;
    }, function (error) {

        //$scope.errorm = error.data.message ;
        $scope.profile_err = error.data.message;
        //alert($scope.errorm);
    })
    
   /* $http.get("/json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;

    });*/
     $http.post("/todolist",data).then(function (response) {  //Read json file
        //alert("hi");         

       //alert(response);
        $scope.statusbox = response.data.getProductsofuserinterest;
        //console.log($scope.statusbox[0]);

    });
    /* ,
                                                  function (error) {
                                                      // Handle error here
                                                      console.log(error.data);
                                                      alert(error.data.message);
                                                  });*/

    //$scope.usern = $window.sessionStorage.getItem("user_name");
    $scope.usern = localStorage.getItem("username")
    // alert($scope.usern);

    $scope.openmodal = function (prodid) {
      //alert(prodid);
        $scope.productID = prodid;
        $scope.errormessage = '';
        // alert(productID);
        $("#Product").modal();
    }



    $scope.someSelected = function (object) {
        if (!object) return false;
        return Object.keys(object).some(function (key) {
            return object[key];
        });
    }

    $scope.doTouched = function () {
        $scope.theForm.subscribe.$setTouched();
    }

    var confirm_message = "Do you want to add this product? If you click on 'OK' button, the product will be added to  your to-do list";
    function confirmDialog(message, onConfirm) {
        // $("addbox").disabled = true;
        var fClose = function () {

            modal.modal("hide");
        };
        var modal = $("#confirmModal");
        modal.modal("show");
        $("#confirmMessage").empty().append(message);
        $("#confirmOk").one('click', onConfirm);
        $("#confirmOk").one('click', fClose);
        $("#confirmCancel").one("click", fClose);

        $("#Product").modal("hide");
    }
    $scope.addtobox = function () {

        confirmDialog(confirm_message, function () {
            //My code to confirmation window

            var statusboxdata = {
                username: $scope.usern,
                product_Id: $scope.productID
            }

            $http.post("/package", statusboxdata).then(function (res) {
        console.log('Data posted successfully');
       // alert("Package has been added")
        //code added by leena
                           $('#alert_placeholder1').html('<div class="alert alert-success fade" id="code-alert" style="width:50%; margin:auto;"><button type="button" class="close" data-dismiss="alert">x</button><strong></strong>Package has been added</div>').alert();
                        $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
                            $("#code-alert").slideUp(500);
                             });
                        //code end by leena


   },
       function (error) {
           // Handle error here
           console.log(error.data);
           //alert(error.data.message);
            //code added by leena
                           $('#alert_placeholder1').html('<div class="alert alert-danger fade" id="code-alert" style="width:50%; margin:auto;"><button type="button" class="close" data-dismiss="alert">x</button><strong>Sorry! </strong>'+error.data.message+'</div>').alert();
                        $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
                            $("#code-alert").slideUp(500);
                             });
                        //code end by leena
       });
        });
    };

     //code added by leena for edit
    $scope.editprofile = function(){
       // alert("hi");
      localStorage.setItem("editProfileFlag", 1);
      localStorage.setItem("first_name", $scope.userinfo.firstname);
      localStorage.setItem("last_name", $scope.userinfo.lastname);
      localStorage.setItem("dob", $scope.userinfo.dob);
      localStorage.setItem("gender", $scope.userinfo.gender);
      localStorage.setItem("instagram_url", $scope.userinfo.instagram_url);
      localStorage.setItem("facebook_url", $scope.userinfo.facebook_url);
      localStorage.setItem("twitter_url", $scope.userinfo.twitter_url);
      if($scope.userinfo.snapchat_url==null)
      {
        //alert("d");
            localStorage.setItem("snapchat_url", "");
      }
      else
      {
            localStorage.setItem("snapchat_url", $scope.userinfo.snapchat_url);
      }
      if($scope.userinfo.youtube_channel==null)
      {
        //alert("d");
            localStorage.setItem("youtube_channel", "");
      }
      else
      {
            localStorage.setItem("youtube_channel", $scope.userinfo.youtube_channel);
      }
      if($scope.userinfo.website==null)
      {
        //alert("d");
            localStorage.setItem("website", "");
      }
      else
      {
            localStorage.setItem("website", $scope.userinfo.website);
      }
      
      //localStorage.setItem("youtube_channel", $scope.userinfo.youtube_channel);
      //localStorage.setItem("website", $scope.userinfo.website);
      localStorage.setItem("address_line1", $scope.userinfo.address);
       if($scope.userinfo.address_line2address_line2==null)
      {
        //alert("d");
            localStorage.setItem("address_line2", "");
      }
      else
      {
            localStorage.setItem("address_line2", $scope.userinfo.address_line2);
      }
      //localStorage.setItem("address_line2", $scope.userinfo.address_line2);
      localStorage.setItem("country", $scope.userinfo.country);
      localStorage.setItem("state", $scope.userinfo.state);
      localStorage.setItem("city", $scope.userinfo.city);
      //alert($scope.userinfo.zip_Code);
      localStorage.setItem("zip_Code", $scope.userinfo.zip_Code);
      localStorage.setItem("mob", $scope.userinfo.mob);
      localStorage.setItem("categories", $scope.userinfo.categories);
          
      window.location.href = "http://localhost:3000/Profile.html";
    }

    //code end by leena for edit


    $scope.logout = function (event) {
        localStorage.clear();
        window.location.href = "http://localhost:3000/Startup.html";
    };

    $(document).ready(function () {
        function disableBack() { window.history.forward() }

        window.onload = disableBack();
        window.onpageshow = function (evt) {
            if (evt.persisted) disableBack()
            return "please login";
        }


    });
});



/*  $http.post("", statusboxdata).then(function (res) {
        console.log('Data posted successfully');
        alert("Package has been added")


   },
       function (error) {
           // Handle error here
           console.log(error.data);
           alert(error.data.message);
       });*/
