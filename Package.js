var mongoose = require('mongoose');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var packageSchema = new mongoose.Schema({
	//please don't make any changes 
	product_Id:{
		type: ObjectId
	},
	
	username:{
		type: String
	},
	status:{
		type: String
		
	},
	package_Timestamp:{
		type: Date
	}
});

var Package = module.exports = mongoose.model('package', packageSchema);



// Function to get list of all Packages
module.exports.getPackages = function(callback, limit){
	Package.find(callback).limit(limit);
}

// Function to get package detail by username alone.
module.exports.getPackageByName = function(packagename, callback){
	Package.findOne({'packagename':packagename}, callback);
}

// Function to delete a particular package by username
module.exports.deletePackageByName = function(user, callback){
	console.log('going to delete ' + user +'!!!! ');
	var query = {packagename: user};
	Package.remove(query, callback);
}



