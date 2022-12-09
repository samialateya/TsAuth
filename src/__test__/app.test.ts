import request from 'supertest';
import app from '../app';

/* -------------------------- test the health check ------------------------- */
describe('Check the application main functionality', () => {
	// * check the routs health
	it('should return 200 OK', async () => {
		const response = await request(app).get('/health');
		expect(response.status).toBe(200);
	});
});
