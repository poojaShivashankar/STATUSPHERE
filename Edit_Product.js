var mongoose = require('mongoose')
var product = require('../models/product');

module.exports.Edit_Product = function(req,res){

product.findById(req.body.product_Id, function(err,Product) {
    if (err){
      res.status(400).send({
    
   message: 'There is no product'
});}
    else{

Product.product_Name = req.body.product_Name;
Product.description = req.body.description;
Product.categories = req.body.categories;
Product.quantity = req.body.quantity;
Product.image_Url = req.body.image_Url;
Product.brand_Url = req.body.brand_Url;
Product.brand_Instagram = req.body.brand_Instagram;
Product.video_Link = req.body.video_Link;
Product.requirement = req.body.requirement;

    // Save the beer and check for errors
Product.save(function(err) {
      if (err)
        res.send(err);

    //  res.json(product);
    });}
  });

}