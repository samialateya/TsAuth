import { createClient } from 'redis';
import type { RedisClientType } from 'redis';
import redisConfig from '../Config/redis.config';
import { RedisInterface } from '../Interfaces/Lib/Redis.interface';

class Redis implements RedisInterface {
	/* ---------------------------- Class properties ---------------------------- */
	client: RedisClientType;
	
	/* ------------------ constructor to initialize the client & connect to the redis server ------------------ */
	constructor() {
		// create a new redis client
		this.client = createClient(redisConfig);
	}

	/* ----------------------------- private helpers ---------------------------- */
	// * connect to the redis server
	async connect(): Promise<Redis> {
		try {
			await this.client.connect();
			// handle redis errors
			this.client.on('error', (error) => {
				// ignore the error if the connection is closed
			});
			return this;
		}
		catch (error) {
			console.error(error);
			return this;
		}
	}

	/* ----------------------------- public methods ---------------------------- */
	// * get the value of a key
	async get(key: string): Promise<string> {
		// ? return null if the connection is closed
		if (!this.client.isReady) {
			return null;
		}
		return await this.client.get(key);
	}

	// * set the value of a key
	async set(key: string, value: string): Promise<boolean> {
		// ? return false if the connection is closed
		if (!this.client.isReady) {
			return false;
		}
		await this.client.set(key, value);
		return true;
	}
}

// return a connected instance of the class 
const redis = new Redis();
const connectedRedis = redis.connect();

export default connectedRedis;
