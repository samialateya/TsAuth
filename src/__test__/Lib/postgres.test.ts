import PostgresModule from '../../Lib/Postgres';
import * as dotenv from 'dotenv';

dotenv.config();

/* ------------------------ test postgres functionality ------------------------ */
describe('Check the postgres functionality', () => {
	
	// * check postgres connection
	it('should be able to connect to postgres client', async () => {
		// wait for the postgres module to be connected
		const postgresModule = await PostgresModule;
		// print the environment variables
		console.log('host', process.env.POSTGRES_HOST);
		console.log('port', process.env.POSTGRES_PORT);
		console.log('user', process.env.POSTGRES_USER);
		console.log('password', process.env.POSTGRES_PASSWORD);
		console.log('database', process.env.POSTGRES_DATABASE);
		// check if the postgres client is connected
		expect(postgresModule.client._connected).toBe(true);
	});
});