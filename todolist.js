var mongoose = require('mongoose')
var package = require('../models/package'); 
var Product = require('../models/product');
var influencer = require('../models/influencer')


module.exports.getProductsofuserinterest = function(req,res){

influencer.findOne({ influencer_username: req.body.username }, function(err,Influencer) {
    if (err){
      res.status(400).send({
    
   message: 'There is no influencer'
   });}
      else{

Product.find({categories:Influencer.categories},function(err,Products){
if(err){
	
		res.status(404).json({message:"Products not found"}
	);
}
else{
	res.status(200);
	res.json({
		"getProductsofuserinterest":Products
	});
}
}
);
}

}

);

}
