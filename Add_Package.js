var mongoose = require('mongoose')
var package = require('../models/package');
const username = require('username');
//var random = require("random-js")(); 
var Product = require('../models/product');



var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.AddPackage = function(req,res){


var Package = new package();
console.log("haaaaaaaaaaaaa");
Package.product_Id = req.body.product_Id;
Package.username = req.body.username;
Package.package_Timestamp = Date.now();
Package.status = "Added";
//Applicant.setPassword(req.body.password.toString());
Package.save(function(err){
 if(err){
 	console.log("there is an error");
 	console.log(err);
 	//res.send(err);
 	//res.json({"message":"there is an error"});
 	res.status(400).send({
   message: 'Product already exits.'
});
 }
 else{
	console.log("success");
	//res.status(200);
// 	res.json({
// 		"message":"success"
// 	});
}
});

 Product.findById(req.body.product_Id, function(err,product) {
    if (err){
      res.status(400).send({
    
   message: 'There is no product'
});}
    else{
    // Update the existing quantity
    product.quantity = product.quantity-1;

    product.save(function(err) {
      if (err)
        res.send(err);
      
//      else{
// 	     res.json({product:product});
//      }
    //  res.json(product);
    });}
  });
}  


