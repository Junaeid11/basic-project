import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationSchema from './student.validatation';

const createStudent = async (req: Request,res: Response) =>{
   try{
  const {student: studentData} = req.body; 
  const {error} =studentValidationSchema.validate(studentData);
  const result = await StudentService.createStudentIntoDb(studentData);
  if(error){
    res.status(500).json({
       success: false,
       massage:'Student creation failed',
       error:error.details
  })}
   res.status(200).json({
    success: true,
    massage:'Student created successfully',
    data: result
   })
   }catch(err){
    res.status(500).json({
         success: false,
         massage:'Student creation failed',
         error: err
      })
   }
};
// const getAllStudents = async (req: Request,res: Response) =>{
//     try{
//       const result = await StudentService.getAllStudentsFormDb();
//       res.status(200).json({
//        success: true,
//        massage:'Students are retrieved successfully',
//        data: result
//       })


//     }catch(err){
//         console.log(err)    
// }
// }
export const StudentController = {
    createStudent,
   // getAllStudents

}
