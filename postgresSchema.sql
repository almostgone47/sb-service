/*
 *  Execute this file from the terminal
 *  `psql --username=postgres -d eightbnb < schema.sql`
 *  - `eightbnb` is the database (created beforehand)
 *  - `postgres` is the role (created beforehand)
 *  Note: need to figure out hardening of DB
 *  - `ALTER ROLE <username> WITH ENCRYPTED PASSWORD '<password>';`
 *  - `\conninfo` => You are connected to database "eightbnb" as user "postgres"
 *                   via socket in "/tmp" at port "5432"
 */

DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS nearby_homes;

CREATE TABLE listings (
  id BIGSERIAL PRIMARY KEY,
  neighborhood INT NOT NULL,
  walk_score INT NOT NULL,
  transit_score INT NOT NULL
);

CREATE TABLE nearby_homes (
  id BIGSERIAL PRIMARY KEY,
  price INT NOT NULL,
  sqft INT NOT NULL,
  bedNumber INT NOT NULL,
  bathNumber INT NOT NULL,
  listings_id INT REFERENCES listings (id)
);