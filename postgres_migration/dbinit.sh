psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	-- create table users if not exists
	CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			name VARCHAR(255) NOT NULL,
			email VARCHAR(255) NOT NULL,
			password VARCHAR(255) NOT NULL,
			email_verified_at TIMESTAMP,
			created_at TIMESTAMP NOT NULL DEFAULT NOW(),
			updated_at TIMESTAMP NOT NULL DEFAULT NOW()
	);

	-- set the email column to be unique
	ALTER TABLE users ADD CONSTRAINT email_unique UNIQUE (email);

	-- set the name column to be index
	CREATE INDEX name_index ON users (name);
EOSQL
