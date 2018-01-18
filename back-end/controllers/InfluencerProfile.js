var mongoose = require('mongoose');
var influencer = require('../models/influencer');

module.exports.influencer_profile = function(req,res){
  
 console.log("hello");
 influencer.findOne({ influencer_username: req.body.username }, function(err,Influencer) {
    console.log(Influencer.username);
    if (err){
      res.status(400).send({
    
   message: 'There is no influencer'
   });}
//    
else{

res.json(
      {                 
        influencer:Influencer
      });
}
 });

}



module.exports.profileEdit = function(req,res){

 console.log("hello");
 influencer.findOne({ influencer_username: req.body.username }, function(err,Influencer) {
    console.log(Influencer.username);
    if (err){
      res.status(400).send({
    
   message: 'There is no influencer'
   });}

 else{
    // Update the existing quantity
   Influencer.firstname = req.body.firstname || Influencer.firstName||null;
    Influencer.lastname = req.body.lastname|| Influencer.lastName ||null;
    Influencer.birthday = req.body.dob ||Influencer.dob|| null;
    Influencer.mob = req.body.mob || Influencer.mob||null;
    Influencer.instagram_url = req.body.instagram_url || Influencer.instagram_url || null ;
    Influencer.facebook_url = req.body.facebook_url ||  Influencer.facebook_url ||null;
    Influencer.twitter_url = req.body.twitter_url || Influencer.twitter_url || null ;
    Influencer.image_url=req.body.image_url || Influencer.image_url || null ;
    Influencer.snapchat_url= req.body.snapchat_url ||  Influencer.snapchat_url ||null ;
    Influencer.website= req.body.website ||  Influencer.website ||null ;
    Influencer.youtube_channel = req.body.youtubechannel ||  Influencer.youtube_channel || null;
    Influencer.state = req.body.State || Influencer.state ||null; 
    Influencer.city = req.body.City || Influencer.city ||null ;
    Influencer.zip_Code = req.body.ZipCode || Influencer.zip_Code ||null ;
    Influencer.gender = req.body.gender || Influencer.gender || null ;
    Influencer.address = req.body.AddressLine1 || Influencer.address_line1 ||null ;
    Influencer.country=req.body.Country ||  Influencer.country ||null ;
    Influencer.categories = req.body.categories || Influencer.categories || null;



   
    Influencer.save(function(err) {
      if (err)
        res.send(err);
   else{
    
     res.json(
      {
        message:"your profile details have been successfully submitted, please wait till we notify you about your acceptance or rejection",                  
        influencer:Influencer
      });}
     }
   
   );

  

}
});
}
