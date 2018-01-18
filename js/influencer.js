/*
Script Name: influencer.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/

var app = angular.module('influencerApp', []);
app.controller('influencerCtrl', function ($scope,$http) {

    //$scope.names =  influencerListObj;
    
    
    $http.get('api/influencerlist').then(function(response) {
            $scope.influencers = response.data;
        });

    $scope.openNotificationModal = function( emailid)
    {
        //alert("Open Modal " + emailid);
        $("#divNotificationEmailID").html("");

        document.getElementById('txtEmailID').value = emailid;
        //var modalBody = "<input type='text' id='txtEmailID' ng-model='frmSendMessage.emailID' class='form-control' value=\" " + emailid + " \" />";

        //console.log("input: " + modalBody);
        //$(modalBody).appendTo("#divNotificationEmailID");
        $("#divSendMessage").modal('toggle');

        
    }
    
    $scope.sendNotification = function() {

        // Get Email id
        emailID = $scope.frmSendMessage.emailID;
        // Get Subject of Notification Message
        emailSub = $scope.frmSendMessage.emailSubject;
        // Get NOtification Message
        notificationMsg = $scope.frmSendMessage.notificationMsg;

        //alert("Email:" + emailID + "\nSUB:" + emailSub + "\nnotificationMsg:" + notificationMsg);

        // Post the data to the server
        $scope.errormessage='';
        var data={
                    emailid: $scope.frmSendMessage.emailID,
                    subject: $scope.frmSendMessage.emailSubject,
                    message: $scope.frmSendMessage.notificationMsg
                };
        
        //alert("DATA:" + data.emailid + data.subject + data.message);
        /*console.log(data.emailid);
        console.log(data.subject);
        console.log(data.message);*/

        $http.post("api/messagelist", data).then(function (response, status) {
            $scope.status = status;
            //alert("Status Code" + status);
            // On success perform the following task
            $("#divSendMessage").modal('toggle');
            // Call confirm dialog message on success of the status code
            var confirm_message="Message Sent sucessfully!!";
            confirmDialog(confirm_message, function () {})

        });
    }

    // Dislay all the information of a product
    $scope.viewInfluencer = function( username)
    {
      alert("View Product:" + username);
      $("#divInfluencerInfo").html("");
      var table = "<table name='tblSentMessage' styel='border:blue'><tbody>";

      // Get Notification Messages
      $http.get("api/influencerlist/" + username).then(function (response) {
          var influencerInfo = response.data;
          var table = "<table name='tblInfluencerInfo' styel='border:blue'><tbody>" ;       
          table += "<tr><td> First Name</td><td><input type='text' value='" + influencerInfo['firstname'] + "' readonly ></td></tr>";
          table += "<tr><td> Last Name </td><td><input type='text' value='" + influencerInfo['lastname'] + "' readonly ></td></tr>";
          table += "<tr><td> User Name </td><td><input type='text' value='" + influencerInfo['influencer_username'] + "' readonly ></td></tr>";
          table += "<tr><td> Instagram ID </td><td><input type='text' value='" + influencerInfo['instagram_url']+ "' readonly ></td></tr>";
          table += "<tr><td> Instagram Followers </td><td><input type='text' value='" + influencerInfo['followers'] + "' readonly ></td></tr>";
          table += "<tr><td> Twitter ID </td><td><input type='text' value='" + influencerInfo['twitter_url'] + "' readonly ></td></tr>";
          table += "<tr><td> Facebook ID </td><td><input type='text' value='" + influencerInfo['facebook_url'] + "' readonly ></td></tr>";
          table += "<tr><td> Mobile  </td><td><input type='text' value='" + influencerInfo['mob'] + "' readonly ></td></tr>";
          table += "<tr><td> Birthday </td><td><input type='text' value='" + influencerInfo['birthday'] + "' readonly ></td></tr>";
          table += "<tr><td> Gender  </td><td><input type='text' value='" + influencerInfo['gender'] + "' readonly ></td></tr>";
          table += "<tr><td> Address  </td><td><input type='text' value='" + influencerInfo['address'] + "' readonly ></td></tr>";
          table += "<tr><td> Country  </td><td><input type='text' value='" + influencerInfo['country'] + "' readonly ></td></tr>"; 
          table += "<tr><td> State  </td><td><input type='text' value='" + influencerInfo['state'] + "' readonly ></td></tr>";
          table += "<tr><td> City  </td><td><input type='text' value='" + influencerInfo['city'] + "' readonly ></td></tr>";
          table += "<tr><td> zip_Code  </td><td><input type='text' value='" + influencerInfo['zip_Code'] + "' readonly ></td></tr>";
          table += "<tr><td> Categories  </td><td><input type='text' value='" + influencerInfo['categories'].join() + "' readonly ></td></tr>";
          table += "<tr><td> Date Accepted  </td><td><input type='text' value='" + influencerInfo['date_accepted'] + "' readonly ></td></tr>"; 
          //table += "<tr><td> Gamification Points  </td><td><input type='text' value='" + influencerInfo['gamification_points'] + "' readonly ></td></tr>";      
          table += "</tbody></table>";

          $(table).appendTo("#divInfluencerInfo");
          console.log(table);

      });
      $("#divViewInfluencer").modal('toggle');

      
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
