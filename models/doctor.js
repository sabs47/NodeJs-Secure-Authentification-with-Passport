var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Doctor Schema
var DoctorSchema = mongoose.Schema({
	 username: {
		type: String,
		index:true
	},
		lastname: {
		type: String
	},
    firstname: {
		type: String
	},
   
	password: {
		type: String
	},
	email: {
		type: String
	},

    phonecall :{
        type: Number
    },

Speciality : {
    type: String
}
    
});

var Doctor = module.exports = mongoose.model('Doctor', DoctorSchema);

module.exports.createDoctor = function(newDoctor, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newDoctor.password, salt, function(err, hash) {
	        newDoctor.password = hash;
	        newDoctor.save(callback);
	    });
	});
}