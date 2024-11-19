import  express  from "express";
import { StudentController } from "./student.controller";

const router = express.Router();
// we will add the controller 
router.post('/create-student', StudentController.createStudent)
export const StudentRoute = router;