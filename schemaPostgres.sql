/*
 *  Execute this file from the terminal
 *  `psql --username=postgres -d mydb < schemaPostgres.sql`
 *  - `mydb` is the database (created beforehand)
 *  - `postgres` is the role (created beforehand)
 *  - 'password on ec2 = mypgdb1234
 *  Note: need to figure out hardening of DB
 *  - `ALTER ROLE <username> WITH ENCRYPTED PASSWORD '<password>';`
 *  - `\conninfo` => You are connected to database "eightbnb" as user "postgres"
 *                   via socket in "/tmp" at port "5432"
 */

DROP TABLE IF EXISTS listing CASCADE;
DROP TABLE IF EXISTS neighborhood CASCADE;

CREATE TABLE "listing" (
	"id" serial NOT NULL,
	"neighborhood_id" bigint NOT NULL,
	"price" money NOT NULL,
	"sqft" int NOT NULL,
	"bed_number" int NOT NULL,
	"bath_number" int NOT NULL,
	"listing_address" TEXT NOT NULL,
	"images" TEXT,
	CONSTRAINT "listing_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "neighborhood" (
	"id" serial NOT NULL,
	"transit_score" int NOT NULL,
	"walk_score" int NOT NULL,
	CONSTRAINT "neighborhood_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "listing" ADD CONSTRAINT "listing_fk0" FOREIGN KEY ("neighborhood_id") REFERENCES "neighborhood"("id");