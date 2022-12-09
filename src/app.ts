/* ---------------- import express and configuration packages --------------- */
import * as dotenv from 'dotenv';
import 'express-async-errors';
import express, { Application, Request, Response } from 'express';

/* --------------------- initialize express application --------------------- */
dotenv.config();
export const app: Application = express();

/* --------------------------- register the routes -------------------------- */

// * health check
app.get('/health', (req: Request, res: Response) => {
	res.status(200).send('OK');
});


// export the app
export default app;