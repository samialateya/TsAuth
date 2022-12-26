import { PostgresConfigInterface } from '../Interfaces/Lib/Postgres.interface';
import * as dotenv from 'dotenv';

dotenv.config();

const postgresConfig: PostgresConfigInterface = {
	host: process.env.POSTGRES_HOST || 'localhost',
	port: Number(process.env.POSTGRES_PORT) || 5432,
	user: process.env.POSTGRES_USERNAME || 'postgres',
	password: process.env.POSTGRES_PASSWORD || 'postgres',
	database: process.env.POSTGRES_DATABASE || 'postgres',
};

export default postgresConfig;