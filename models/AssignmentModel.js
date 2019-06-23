const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//AssignmentModelSchema
const AssignmentSchema = new Schema ({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    CourseID:{
        type:String,
        required:true
    },
    DueDate:{
        type:Date,
        required:true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'StudentEnrollment'
    }]




});

mongoose.model( 'AssignmentModel', AssignmentSchema);
module.exports = mongoose;