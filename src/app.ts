import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { StudentRoute } from './app/modules/student/student.route';
const app: Application = express()
app.use(express.json())
app.use(cors());
//application routes
app.use('/api/v1/students', StudentRoute)
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

export default app