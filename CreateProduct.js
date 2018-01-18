var mongoose = require('mongoose')
var product = require('../models/product');
var requirement = require('../models/requirement')

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.Create_Product = function(req,res){

// var applicant = new applicant({
var Product = new product();
var _id = Product._id;
console.log("hellohdus");
Product.product_Name = req.body.product_Name;
Product.description = req.body.description;
Product.categories = req.body.categories;
Product.quantity = req.body.quantity;
Product.image_Url = req.body.image_Url;
Product.brand_Url = req.body.brand_Url;
Product.brand_Instagram = req.body.brand_Instagram;
Product.video_Link = req.body.video_Link;
Product.requirements = req.body.requirements; 
Product.productId = req.body.productId;


//Applicant.setPassword(req.body.password.toString());
Product.save(function(err,room){
	if(err){
		res.json(err);
	}
	else{
	res.status(200);
	res.json({
		"message":"success"
	});
};
})}


