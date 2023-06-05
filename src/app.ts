import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

app.use('/api/v1/users', UserRoutes);

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello PHU');
});

// Global error handler
app.use(globalErrorHandler);

export default app;
