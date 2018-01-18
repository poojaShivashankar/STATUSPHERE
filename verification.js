var mongoose = require('mongoose');

var verificationSchema = new mongoose.Schema({
	emailid:{
		type: String,
		required: true
	},
	bool:{
		type: Number,
		default: true,
		required: false
	},
	match:{
		type: Number,
		default: false,
		required: false
	},
	randomcode:{
		type: String,
		required: false
	},
	date_sent:{
		type: Date,
		default: Date.now
	},
});

var Verification = module.exports = mongoose.model('verification', verificationSchema);


// Function to store verification code
// Have to handle schema enforcement
module.exports.addVerification = function(verification, callback){
	Verification.create(verification, callback);
}

// Function to get list of all Verification codes
module.exports.getVerification = function(callback, limit){
	Verification.find(callback).limit(limit);
}

// Function to get verification detail by emailID alone.
module.exports.getVerificationByEmail = function(emailid, callback){
	Verification.findOne({'emailid':emailid}, callback);
}

// Function to remove verification code
module.exports.deleteVerificationByEmail = function(emailid, callback){
	var query = {emailid: emailid};
	Verification.remove(query, callback);
}
