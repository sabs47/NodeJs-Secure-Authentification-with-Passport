var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Appointment Schema
var ConsultationSchema = mongoose.Schema({
//this code will be get by the patien once valide request for Appointment
code_consultation:{
type :Number,
index :true
},
		patient_Firstname: {
		type: String
	},
    patient_Lastname: {
		type: String
	},
    patient_phonecall: {
		type: String
    	},
	patient_Adresse: {
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

doctor_firstname : {
    type: String
},
    
    
doctor_lastname : {
    type: String
},
    
    
doctor_speciality : {
    type: String
},
    
    date_consultation :{
        type: Date
    },

hour_consultation : {
    type: String
},

medic_prescribed : {
    type: String
},
dosage_medic : {
    type: String
}

});

var Consultation = module.exports = mongoose.model('Consultation', ConsultationSchema);

module.exports.createConsultation = function(Consultation, callback){
	        newConsultation.save(callback);
}