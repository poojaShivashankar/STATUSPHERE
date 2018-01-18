var mongoose = require('mongoose')
var message = require('../models/message');  // Include message schema




/*
Function Name: 
*/
module.exports.sendNotification = function(req,res){


    //alert("Notification Backend");
    console.log("Notification Backend");
    console.log("Body:" + req.body.emailid);
    var notificationMsg = new message(); // Create Object
    notificationMsg.influencer_username = "test";
    notificationMsg.applicant_id = "123456";
    notificationMsg.emailid = req.body.emailid;
    //notificationMsg.emailid = "nishant@gmail.com";
    notificationMsg.subject = req.body.subject;
    //notificationMsg.subject = "Test    asljdsakldja";
    notificationMsg.message = req.body.message;
    //notificationMsg.message = "My Message";
    notificationMsg.firstname = "First Name";
    notificationMsg.lastname = "Last Name";
    notificationMsg.date_sent = "04/15/2017";

    notificationMsg.save(function(err){
 	        if(err){
 	        	res.json({"message":"username already exists"});
 	        }
 	        else{
		    console.log(req.body.firstName);
			var token = notificationMsg.addMessage();
			res.status(200);
			res.json({
				"message":"Notification Sent successfully"
			});}
		});
  }


/*
Fuction Name: getNotificationMessage
*/

module.exports.getNotificationMessage = function(req,res){

    console.log("Get Notification Message");
    // Get data from DB and sent it to front and.
}
