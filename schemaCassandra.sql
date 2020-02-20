/*
 *  Execute this file from the terminal
 *  `cqlsh -f schemaCassandra.sql`
 */

DROP KEYSPACE IF EXISTS mydb;
CREATE KEYSPACE mydb WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor' : '1' };

use mydb;

-- CREATE TABLE listing (
-- 	listing_id uuid,
-- 	price money,
-- 	sqft int,
-- 	bed_number int,
-- 	bath_number int,
-- 	listing_address TEXT,
-- 	images TEXT,
-- 	PRIMARY KEY (listing_id)
-- );

-- CREATE TABLE neighborhood (
-- 	neightborhood_id uuid,
-- 	transit_score int,
-- 	walk_score int,
-- 	PRIMARY KEY (neighborhood_id)
-- );

CREATE TABLE listing_by_neighborhood (
	neighborhood_id int,
	listing_id int,
	price int,
	sqft int,
	bed_number int,
	bath_number int,
	listing_address TEXT,
	images TEXT,
	transit_score int,
	walk_score int,
	PRIMARY KEY (neighborhood_id, listing_id)
);