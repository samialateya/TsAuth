import { Client } from 'pg';
import postgresConfig from '../Config/Postgres.config';

class Postgres {
	/* ---------------------------- class properties ---------------------------- */
	client: Client;

	/* ------------------ constructor to initialize the client ------------------ */
	constructor() {
		// create a new postgres client
		this.client = new Client(postgresConfig);
	}

	/* ---------------------------- class methods ---------------------------- */

	// * connect to the database
	async connect() {
		try {
			await this.client.connect();
		} catch (error) {
			console.log('Postgres connection error', error);
		}
		return this;
	}
}

const postgres = new Postgres();
const postgresConnection = postgres.connect();

export default postgresConnection;