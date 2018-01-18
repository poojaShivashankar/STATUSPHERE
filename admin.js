var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
admin_Name:{
	type:String,
	required : true
},
admin_username:{
	type:String,
	unique: true,
	required: true

},
admin_password:{
	type : String,
	unique: true,
	required: true
}

});

module.exports = mongoose.model('admin', adminSchema);