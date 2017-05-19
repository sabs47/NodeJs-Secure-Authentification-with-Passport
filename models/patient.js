var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Patient Schema
var PatientSchema = mongoose.Schema({
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

adress : {
    type: String
},

allergies : {
    type: String
},
blood_type: {
    type: String
}
    
});

var Patient = module.exports = mongoose.model('Patient', PatientSchema);

module.exports.createPatient = function(newPatient, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newPatient.password, salt, function(err, hash) {
	        newPatient.password = hash;
	        newPatient.save(callback);
	    });
	});
}