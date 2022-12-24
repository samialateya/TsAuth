import RedisModule from '../../Lib/redis';


/* ------------------------ test redis functionality ------------------------ */
describe('Check the redis functionality', () => {
	
	// * check redis connection
	it('should be able to connect to redis client', async () => {
		// wait for the redis module to be connected
		const redisModule = await RedisModule;
		// check if the redis client is connected
		expect(redisModule.client.isReady).toBe(true);
	});

	// * check redis set method
	it('should be able to set a key in redis', async () => {
		// wait for the redis module to be connected
		const redisModule = await RedisModule;
		// set a key in redis
		const setResponse = await redisModule.set('testKey', 'testValue');
		// check if the key is set
		expect(setResponse).toBe(true);
	});

	// * check redis get method
	it('should be able to get a key from redis', async () => {
		// wait for the redis module to be connected
		const redisModule = await RedisModule;
		// get a key from redis
		const getValue = await redisModule.get('testKey');
		// check if the key is set
		expect(getValue).toBe('testValue');
	});
});