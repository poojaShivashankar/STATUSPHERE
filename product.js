var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var requirement = require('./requirement');



var productSchema = new mongoose.Schema({

productID:{
	type:String,
	//required:true

},
product_Name:{
	type:String,
	required:true
	
},
description:{
	type:String,
	required:true
	

},
requirements:{ 
	type:[String], 
        required:true 
},


image_Url:{
	type:String
},
categories:{
	type: [String],
	required:true
	
},
quantity:{
	type: Number
	
},

brand_Url:{
	type: String

},

video_Link:{
	type: String
},

brand_Instagram:{
	type:String
},

points_required:{
	type:Number
},
date_craeted:{
		type: Date
}


});


var Product = module.exports = mongoose.model('product', productSchema);
// Function to add influencers
// Have to handle schema enforcement
module.exports.addProduct = function(product, callback){
	Product.create(product, callback);
}

// Function to get list of all Influencers
module.exports.getProducts = function(callback, limit){
	Product.find(callback).limit(limit);
}

// Function to get influencer detail by username alone.
module.exports.getProductByName = function(productname, callback){
	Product.findOne({'product_Name':productname}, callback);
}

// Function to get influencer detail by productID alone.
module.exports.getProductByID = function(productID, callback){
	Product.findOne({'productID':productID}, callback);
}

// Function to delete a particular product by productID
module.exports.deleteProductByID = function(productID, callback){
	console.log('going to delete ' + productID +'!!!! ');
	var query = {productID: productID};
	Product.remove(query, callback);
}
// Function to delete a particular product by name
module.exports.deleteProductByName = function(productname, callback){
	console.log('going to delete ' + productname +'!!!! ');
	var query = {product_Name: productname};
	Product.remove(query, callback);
}

// Function to update a particular product by productID
// Consider what all needs to be updated
module.exports.updateProduct = function(productID, product, options, callback){
	var query = {'productID' : productID};
	var update = {
		requirements: product.requirements,
		quantity: product.quantity
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

/*
// Function to update a particular influencer by emailid
// Consider what all needs to be updated
module.exports.updatePassword = function(emailid, influencer, options, callback){
	var query = {'emailid' : emailid};
	var update = {
		influencer_password: influencer.influencer_password
	}
	Influencer.findOneAndUpdate(query, update, options, callback);
}

// Function to add an Applicant into the Influencer table
// Had to handle all cases where a null is encountered because mongoDB is picky
// Date accepted will automatically default to Date.now
module.exports.addApplicantToInfluencer = function(applicant, callback){
	var influencer = {
		// check if value exists, else put a string which says empty
		influencer_username : (applicant.username != null) ? applicant.username : "empty",
		influencer_password : (applicant.password!= null) ? applicant.password : "empty",
		applicant_id: Math.floor(Math.random()*1000000),
		firstname: (applicant.firstName != null) ? applicant.firstName : "empty",
		lastname: (applicant.lastName != null) ? applicant.lastName : "empty",
		birthday: (applicant.dob != null) ? applicant.dob : 01011900,
		gender: (applicant.gender != null) ? applicant.gender : "empty",
		followers: (applicant.followers != null) ? applicant.followers : 0,
		address: (applicant.address_line1 != null) ? applicant.address_line1 : "empty",
		emailid: (applicant.email != null) ? applicant.email : "empty",
		image_url: (applicant.image_url != null) ? applicant.image_url : "empty",
		instagram_url: (applicant.instagram_url != null) ? applicant.instagram_url : "empty",
		twitter_url: (applicant.twitter_url != null) ? applicant.twitter_url : "empty",
		facebook_url: (applicant.facebook_url != null) ? applicant.facebook_url : "empty",
		categories: (applicant.categories.length > 0) ? applicant.categories : ["empty"],
		gamification_points: 0,
		passreset: false
	}

	console.log(influencer);



	Influencer.create(influencer, callback);
}*/
