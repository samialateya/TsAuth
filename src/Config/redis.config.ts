import * as dotenv from 'dotenv';
import { RedisConfigInterface } from '../Interfaces/Lib/Redis.interface';

dotenv.config();

const REDIS_HOST: string = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT: number = Number(process.env.REDIS_PORT) || 6379;
const URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;

const redisConfig: RedisConfigInterface = {
	url: URL
};

export default redisConfig;