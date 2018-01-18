var mongoose = require('mongoose');

var influencer_requirementSchema = new mongoose.Schema({
influencer_id:{
	type: ObjectId,
	unique :true,
	required : true
},
requirement_id:{
	type:ObjectId,
	unique : true,
	required: true

},
package_id:{
	type: ObjectId,
	unique : true,
	required: true

},
linkforpost:{
	type: String,
	required: true;
},
statusofrequirement:{
	type: Boolean,
	required: true
}

});

module.exports = mongoose.model('influencer_requirement', influencer_requirementSchema);