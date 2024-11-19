import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface';
import  validator from 'validator';

const userNameSchema = new Schema<UserName>({
    firstName: { 
        type: String, 
        trim: true,
        required: [true, 'First name is required.'],
        validate:{
            validator:function(value){
                const firstName = value.charAt(0).toUpperCase() + value.slice(1) ;
                return firstName === value;
            },
            message: '{VALUE} is in capitalize name.'
        } 
    },
    middleName: { 
        type: String, 
        required: [true, 'Middle name is required.'] 
    },
    lastName: { 
        type: String, 
        required: [true, 'Last name is required.'],
        validate:{
            validator:(value: string)=>
                validator.isAlpha(value),
                message: 'Last name should be alphanumeric.'

        } 
    },
});

const guardianSchema = new Schema<Guardian>({
    fatherName: { 
        type: String, 
        required: [true, 'Father\'s name is required.'] 
    },
    fatherOccupation: { 
        type: String, 
        required: [true, 'Father\'s occupation is required.'] 
    },
    fatherContactNumber: { 
        type: String, 
        required: [true, 'Father\'s contact number is required.'] 
    },
    motherName: { 
        type: String, 
        required: [true, 'Mother\'s name is required.'] 
    },
    motherOccupation: { 
        type: String, 
        required: [true, 'Mother\'s occupation is required.'] 
    },
    motherContactNumber: { 
        type: String, 
        required: [true, 'Mother\'s contact number is required.'] 
    },
});

const localGuardianSchema = new Schema<LocalGuardian>({
    name: { 
        type: String, 
        required: [true, 'Local guardian\'s name is required.'] 
    },
    occupation: { 
        type: String, 
        required: [true, 'Local guardian\'s occupation is required.'] 
    },
    contactNumber: { 
        type: String, 
        required: [true, 'Local guardian\'s contact number is required.'] 
    },
    address: { 
        type: String, 
        required: [true, 'Local guardian\'s address is required.'] 
    },
    profileImage: { 
        type: String,
        message: 'Profile image URL is invalid.'
    },
    isActivate: { 
        type: String, 
        enum: ['Yes', 'blocked'], 
        required: [true, 'Local guardian activation status is required.'] 
    },
});

const studentSchema = new Schema<Student>({
    id: { 
        type: String, 
        unique: true,
        required: [true, 'Student ID is required.']
    },
    name: { 
        type: userNameSchema 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female'],
        required: [true, 'Gender is required.']
    },
    age: { 
        type: Number,
        required: [true, 'Age is required.']
    },
    dateOfBirth: { 
        type: String, 
        required: [true, 'Date of birth is required.'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required.'],
       unique: true,
       validate:{
        validator:(value: string)=>validator.isEmail(value),
        message: 'Vhai tmr email Vul thik koro'

       }
    },
    contactNumber: { 
        type: String, 
        required: [true, 'Contact number is required.'] 
    },
    emergencyContactNumber: { 
        type: String 
    },
    bloodGroup: { 
        type: String, 
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: 'Invalid blood group.'
    },
    presentAddress: { 
        type: String, 
        required: [true, 'Present address is required.'] 
    },
    permanentAddress: { 
        type: String, 
        required: [true, 'Permanent address is required.'] 
    },
    guardian: { 
        type: guardianSchema,
        required: [true, 'Guardian information is required.']
    },
    localGuardian: { 
        type: localGuardianSchema
    },
});

const StudentModel = model<Student>('Student', studentSchema);

export { StudentModel };
