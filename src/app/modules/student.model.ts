import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: { type: String, required: true },
    MiddleName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNumber: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNumber: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    profileImage: { type: String },
    isActivate: { type: String, enum: ['Yes', 'blocked'], required: true },
});

const studentSchema = new Schema<Student>({
    id: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    dateOfBirth: { type: String },
    email: { type: String},
    contactNumber: { type: String},
    emergencyContactNumber: { type: String },
    bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    presentAddress: { type: String },
    permanentAddress: { type: String },
});

const StudentModel = model<Student>('Student', studentSchema);
const GuardianModel = model<Guardian>('Guardian', guardianSchema);
const LocalGuardianModel = model<LocalGuardian>('LocalGuardian', localGuardianSchema);
const UserNameModel = model<UserName>('UserName', userNameSchema);

export { StudentModel, GuardianModel, LocalGuardianModel, UserNameModel };
