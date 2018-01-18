var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	influencer_username:{
		type:String,
		default : 'None'
	},
	subject:{
		type: String,
		required: true
	},
	message:{
		type: String,
		required: true
	},
	emailid:{
		type: String,
		required: true
	},
	date_sent:{
		type: Date,
		default: Date.now
	},
});

var Message = module.exports = mongoose.model('message', messageSchema);


// Function to add message
// Have to handle schema enforcement
module.exports.addMessage = function(message, callback){
	Message.create(message, callback);
}

// Function to get list of all messages
module.exports.getMessage = function(callback, limit){
	Message.find(callback).limit(limit);
}

// Function to get message detail by username alone.
module.exports.getMessageByName = function(username, callback){
	Message.findOne({'influencer_username':username}, callback);
}
