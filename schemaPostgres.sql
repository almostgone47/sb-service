/*
 *  Execute this file from the terminal
 *  `psql --username=postgres -d mydb < schemaPostgres.sql`
 *  - `mydb` is the database (created beforehand)
 *  - `postgres` is the role (created beforehand)
 *  Note: need to figure out hardening of DB
 *  - `ALTER ROLE <username> WITH ENCRYPTED PASSWORD '<password>';`
 *  - `\conninfo` => You are connected to database "eightbnb" as user "postgres"
 *                   via socket in "/tmp" at port "5432"
 */

DROP TABLE IF EXISTS listings CASCADE;
DROP TABLE IF EXISTS neighborhoods CASCADE;

CREATE TABLE "listings" (
	"id" serial NOT NULL,
	"neighborhood_id" bigint NOT NULL,
	"price" money NOT NULL,
	"sqft" int NOT NULL,
	"bed_number" int NOT NULL,
	"bath_number" int NOT NULL,
	"listing_address" TEXT NOT NULL,
	"images" TEXT,
	CONSTRAINT "listings_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "neighborhoods" (
	"id" serial NOT NULL,
	"transit_score" int NOT NULL,
	"walk_score" int NOT NULL,
	CONSTRAINT "neighborhoods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "listings" ADD CONSTRAINT "listings_fk0" FOREIGN KEY ("neighborhood_id") REFERENCES "neighborhoods"("id");