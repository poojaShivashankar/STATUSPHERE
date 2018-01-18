var mongoose = require('mongoose')
var package = require('../models/package'); 
var Product = require('../models/product');


module.exports.getAllProducts = function(req,res){


Product.find({},function(err,Products){
if(err){
	
		res.status(404).json({message:"Products not found"}
	);
}
else{
	res.status(200);
	res.json({
		products:Products
	});
}
}
);
}
