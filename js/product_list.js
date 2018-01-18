
/*
Script Name: product_list.js
Description: 1. Used to populate data of all products from database 
                
*/

var myapp = angular.module('productListApp', []);
myapp.controller('productListCtrl', function ($scope,$http) {

    //alert("Product List Page");

    // Initially Load few product fields into the product list page
    $http.get('api/productlist').then(function(response) {
            // To be UPdated when there is any data into the database, and all the required fields matches.
            $scope.products = response.data;



    });
   
    $scope.createProduct = function()
    {
        //alert("craete product !!");
        
        //alert("Email:" + emailID + "\nSUB:" + emailSub + "\nnotificationMsg:" + notificationMsg);
  
        var categories = [ ];
        //alert("Fashion:" + $scope.frmProductCreate.fashion);
        if ( $scope.frmProductCreate.fashion == true)
        {
          categories.push('fashion');
        }
        if ($scope.frmProductCreate.food == true)
        {
          categories.push('food');
        }
        if ( $scope.frmProductCreate.sports == true)
        {
          categories.push('sports');
        }
        if ($scope.frmProductCreate.gadgets == true)
        {
          categories.push('gadgets');
        }
        if ( $scope.frmProductCreate.lifestyle == true)
        {
          categories.push('lifestyle');
        }
        if ($scope.frmProductCreate.makeup == true)
        {
          categories.push('makeup');
        }
        
        
        //categories.push(frmProductCreate.fashion)
        // Post the data to the server
        $scope.errormessage='';
        var data={
                    product_Name : $scope.frmProductCreate.productname ,
                    productID : "ING245" ,
                    requirements : [  $scope.frmProductCreate.requirements ] ,
                    description: $scope.frmProductCreate.productinfo,
                    image_Url : "amc_image",
                    categories: categories,
                    quantity: $scope.frmProductCreate.quantity,
                    brand_Url: $scope.frmProductCreate.brandURL ,
                    video_Link: $scope.frmProductCreate.videolink, 
                    brand_Instagram: $scope.frmProductCreate.brand_Instagram, 
                    points_required: $scope.frmProductCreate.points_required,
                    date_craeted: Date()

                };
        /*console.log(data.emailid);
        console.log(data.subject);
        console.log(data.message);*/
        console.log(data);

        $http.post("api/productlist", data).then(function (response, status) {
            $scope.status = status;
            
            //alert("Status Code" + status);
            // Call confirm dialog message on success of the status code
            var confirm_message="Product Stored sucessfully!!";
            confirmDialog(confirm_message, function () {})

            //$("#divCreateProduct").modal('toggle');

        });



    }

    // Dislay all the information of a product
    $scope.viewProduct = function( productName)
    {
      //alert("View Product:" + productName);
      $("#divProductInfo").html("");
      var table = "<table name='tblSentMessage' styel='border:blue'><tbody>";

      // Get Notification Messages
      $http.get("api/productlist/" + productName).then(function (response) {
          var productInfo = response.data;
          var table = "<table name='tblProductInfo' styel='border:blue'><tbody>" ;       
          table += "<tr><td> Name</td><td><input type='text' value='" + productInfo['product_Name'] + "' readonly </td></tr>";
          table += "<tr><td> Description </td><td><input type='text' value='" + productInfo['productID'] + "' readonly </td></tr>";
          table += "<tr><td> Description </td><td><input type='text' value='" + productInfo['description'] + "' readonly </td></tr>";
          table += "<tr><td> Requirements </td><td><textarea  readonly rows='2' cols='30' >" + productInfo['requirements'].join() + "</textarea> </td></tr>";
          table += "<tr><td> Categories </td><td><textarea  readonly rows='2' cols='30' >" + productInfo['categories'].join() + "</textarea> </td></tr>";
          table += "<tr><td> Quantity </td><td><input type='text' value='" + productInfo['quantity'] + "' readonly </td></tr>";
          table += "<tr><td> Brand URL  </td><td><input type='text' value='" + productInfo['brand_Url'] + "' readonly </td></tr>";
          table += "<tr><td> Video Link </td><td><input type='text' value='" + productInfo['video_Link'] + "' readonly </td></tr>";
          table += "<tr><td> Instragram  </td><td><input type='text' value='" + productInfo['brand_Instagram'] + "' readonly </td></tr>";
          table += "<tr><td> Required Points  </td><td><input type='text' value='" + productInfo['points_required'] + "' readonly </td></tr>";
          table += "<tr><td> Date Created  </td><td><input type='text' value='" + productInfo['date_craeted'] + "' readonly </td></tr>";       
          table += "</tbody></table>";

          $(table).appendTo("#divProductInfo");
          //console.log(table);

      });
      $("#divViewProduct").modal('toggle');

      
    }


    /* Popup Window to show success message */
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
    
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(200)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
}
}
