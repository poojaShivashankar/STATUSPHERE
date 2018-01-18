var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var passreset = false; // To determine whether password is to be reset

var influencerSchema = new mongoose.Schema({
	influencer_username:{
		type:String,
		unique :true,
		required : true
	},
	influencer_password:{
		type: String,
		required:true
	},
	applicant_id:{
		type: Number
	},
	firstname:{
	    type: String
	},
	lastname:{
		type: String
	},
	mob:{
		type:String
	},
	birthday:{
		type: Date
	},
	gender:{
		type: String
	},
	followers:{
		type: Number
	},
	zip_Code:{
		type:String
	},
	address:{
		type: String
	},
	country:{
		type:String},
	state:{
		type:String},
	city:{
		type:String},	
	emailid:{
		type: String
	},
	image_url:{
		type: String
	},
	instagram_url:{
		type: String
	},
	twitter_url:{
		type: String
	},
	facebook_url:{
		type:String
	},
	categories:{
		type: [String]
	},
	date_accepted:{
		type: Date,
		default: Date.now
	},
	gamification_points:{
		type: Number
	},
	passreset:{
		type: Number,
		default: false
	}
});

var Influencer = module.exports = mongoose.model('influencer', influencerSchema);


// Function to add influencers
// Have to handle schema enforcement
module.exports.addInfluencer = function(influencer, callback){
	Influencer.create(influencer, callback);
}

// Function to get list of all Influencers
module.exports.getInfluencers = function(callback, limit){
	Influencer.find(callback).limit(limit);
}

// Function to get influencer detail by username alone.
module.exports.getInfluencerByName = function(username, callback){
	Influencer.findOne({'influencer_username':username}, callback);
}

// Function to get influencer detail by email alone.
module.exports.getInfluencerByEmail = function(emailid, callback){
	Influencer.findOne({'emailid':emailid}, callback);
}

// Function to delete a particular influencer by username
module.exports.deleteInfluencerByName = function(user, callback){
	console.log('going to delete ' + user +'!!!! ');
	var query = {influencer_username: user};
	Influencer.remove(query, callback);
}

// Function to update a particular influencer by username
// Consider what all needs to be updated
module.exports.updateInfluencer = function(username, influencer, options, callback){
	var query = {'influencer_username' : username};
	var update = {
		firstname: influencer.firstname,
		lastname: influencer.lastname
	}
	Influencer.findOneAndUpdate(query, update, options, callback);
}

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
	Influencer.create(influencer, callback);
}
