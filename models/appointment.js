var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Appointment Schema
var AppointmentSchema = mongoose.Schema({
//this code will be generate automaticaly and going to identify patient
code_appointment:{
type :Number,
index :true
},
		patient_firstname: {
		type: String
	},
    patient_lastname: {
		type: String
	},
    patient_phonecall: {
		type: String
    	},
	patient_adresse: {
		type: String
	},
	patient_email: {
		type: String
	},

hospital_name : {
    type: String
},
hospital_serviceasked: {
    type: String
},
    
    date_appointement :{
        type: Date
    },

hour_appointement : {
    type: String
}

});

var Appointment = module.exports = mongoose.model('Appointment', AppointmentSchema);

module.exports.createAppointment = function(Appointment, callback){
	        newAppointment.save(callback);
}