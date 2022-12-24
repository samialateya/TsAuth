/* ---------------- import express and configuration packages --------------- */
import * as dotenv from 'dotenv';
import 'express-async-errors';
import express, { Application, Request, Response } from 'express';

import RedisModule from './Lib/Redis';

/* --------------------- initialize express application --------------------- */
dotenv.config();
export const app: Application = express();

/* --------------------------- register the routes -------------------------- */

// * health check
app.get('/health', (req: Request, res: Response) => {
	res.sendStatus(201);
});

// * check redis connection
app.get('/read', async (req: Request, res: Response) => {
	// wait for the redis module to be connected
	const redisModule = await RedisModule;
	const value: string = await redisModule.get('test');
	const status: number = value ? 200 : 500;
	res.sendStatus(status);
});

// * set redis key
app.get('/write', async (req: Request, res: Response) => {
	// wait for the redis module to be connected
	const redisModule = await RedisModule;
	const write = await redisModule.set('test', 'test');
	const status: number = write ? 200 : 500;
	res.sendStatus(status);
});
	



// export the app
export default app;