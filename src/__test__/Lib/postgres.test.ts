import PostgresModule from '../../Lib/Postgres';

/* ------------------------ test postgres functionality ------------------------ */
describe('Check the postgres functionality', () => {
	
	// * check postgres connection
	it('should be able to connect to postgres client', async () => {
		// wait for the postgres module to be connected
		const postgresModule = await PostgresModule;
		// check if the postgres client is connected
		expect(postgresModule.client._connected).toBe(true);
	});
});