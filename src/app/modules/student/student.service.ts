
import { StudentModel } from '../student.model';
import { Student } from './student.interface';



const createStudentIntoDb = async (student: Student) => {
    // console.log('Incoming Student Data:', student);
   const result = await StudentModel.create(student);
//    console.log('Raw Database Insert Result:', result);
        const fullStudent = await StudentModel.findById(result._id)
        // console.log('Full Student Retrieved:', fullStudent);
        return fullStudent
   
}

// const getAllStudentsFormDb =async ()=>{
//     const result = await StudentModel.find();
//     return result;
// }
export const StudentService = {
    createStudentIntoDb,
    //getAllStudentsFormDb
}
