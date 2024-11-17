import { Schema, model, connect } from 'mongoose';
import { LocalGuardian, Student } from './student/student.interface';

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: {
        firstName: { type: String, required: true },
        MiddleName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    gender:['male','female'],
    dateOfBirth:{type: String},
    email:{type: String, required: true},
    contactNumber:{type: String, required: true},
    emergencyContactNumber:{type: String, required: true},
    bloodGroup:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
    presentAddress:{type:String},
    permanentAddress:{type:String},
    guardian:{
        fatherName:{type:String, required: true},
        fatherOccupation:{type:String, required: true},
        fatherContactNumber:{type:String, required: true},
        motherName:{type:String, required: true},
        motherOccupation:{type:String, required: true},
        motherContactNumber:{type:String, required: true}
    },
    localGuardian:{
        name:{type:String, required: true},
        occupation:{type:String, required: true},
        contactNumber:{type:String, required: true},
        address:{type:String, required: true},
        profileImage:{type:String},
        isActivate:['Yes','blocked']
    }


});