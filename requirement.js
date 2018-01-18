var mongoose = require('mongoose');

var requirementSchema = new mongoose.Schema({

requirement_description:{
	type:String,
	required: true

}

});

module.exports = mongoose.model('requirement', requirementSchema);