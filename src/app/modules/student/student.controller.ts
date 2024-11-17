import { Request, Response } from 'express';
import { StudentService } from './student.service';


const createStudent = async (req: Request,res: Response) =>{
   try{
    const {student: studentData} = req.body;
   const result = await StudentService.createStudentIntoDb(studentData);
   res.status(200).json({
    success: true,
    massage:'Student created successfully',
    data: result
   })
   }catch(err){
    console.log(err)
   }
}
export const StudentController = {
    createStudent
}