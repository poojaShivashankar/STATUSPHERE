var mongoose = require('mongoose');
var applicant = require('../models/applicant');

module.exports.profile = function(req,res){
  
 console.log("hello");
 applicant.findOne({ username: req.body.username }, function(err,Applicant) {
    console.log(Applicant.username);
    if (err){
      res.status(400).send({
    
   message: 'There is no influencer'
   });}
//    
else{

res.json(
      {                 
        applicant:Applicant
      });
}
 });

}



module.exports.profileEdit = function(req,res){

 console.log("hello");
 applicant.findOne({ username: req.body.username }, function(err,Applicant) {
    console.log(Applicant.username);
    if (err){
      res.status(400).send({
    
   message: 'There is no influencer'
   });}

 else{
    // Update the existing quantity
    Applicant.firstName = req.body.firstname || Applicant.firstName||null;
    Applicant.lastName = req.body.lastname|| Applicant.lastName ||null;
    Applicant.dob = req.body.dob ||Applicant.dob|| null;
    Applicant.mob = req.body.mob || Applicant.mob||null;
    Applicant.instagram_url = req.body.instagram_url || Applicant.instagram_url || null ;
    Applicant.facebook_url = req.body.facebook_url ||  Applicant.facebook_url ||null;
    Applicant.twitter_url = req.body.twitter_url || Applicant.twitter_url || null ;
    Applicant.image_url=req.body.image_url || Applicant.image_url || null ;
    Applicant.snapchat_url= req.body.snapchat_url ||  Applicant.snapchat_url ||null ;
    Applicant.website= req.body.website ||  Applicant.website ||null ;
    Applicant.youtube_channel = req.body.youtubechannel ||  Applicant.youtube_channel || null;
    Applicant.state = req.body.State || Applicant.state ||null; 
    Applicant.city = req.body.City || Applicant.city ||null ;
    Applicant.zip_Code = req.body.ZipCode || Applicant.zip_Code ||null ;
    Applicant.gender = req.body.gender || Applicant.gender || null ;
    Applicant.address_line1 = req.body.AddressLine1 || Applicant.address_line1 ||null ;
    Applicant.address_line2 = req.body.AddressLine2 || Applicant.address_line2 || null;
    Applicant.country=req.body.Country ||  Applicant.country ||null ;
    Applicant.categories = req.body.categories || Applicant.categories || null;


   
    Applicant.save(function(err) {
      if (err)
        res.send(err);
   else{
    
     res.json(
      {
        message:"your profile details have been successfully submitted, please wait till we notify you about your acceptance or rejection",                  
        applicant:Applicant
      });}
     }
   
   );

  

}
});
}
