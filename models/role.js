var mongoose = require('mongoose');

// Role Schema
var RoleSchema = mongoose.Schema({
rolename: {
		type: String
	},
processusname: {
		type: String
	},
	processusvalue: {
		type: Boolean
	}});

var Role = module.exports = mongoose.model('Role', RoleSchema);

module.exports.createRole = function(newRole, callback){
	 newRole.save(callback);
}
