CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "clients" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(32) NOT NULL,
	"cpf" char(11) NOT NULL UNIQUE,
	"birth_date" DATE NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
);

CREATE TABLE "accounts" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"owner" uuid NOT NULL REFERENCES "clients"("id"),
	"agency" char(4) NOT NULL,
	"agency_dv" char(1),
	"acct_number" char(8) NOT NULL,
	"acct_number_dv" char(1),
	"balance" numeric NOT NULL,
	CONSTRAINT "accounts_pk" PRIMARY KEY ("id")
);

CREATE TABLE "types_transactions" (
	"id" serial NOT NULL,
	"name" varchar(20) NOT NULL UNIQUE,
	CONSTRAINT "types_transactions_pk" PRIMARY KEY ("id")
);

CREATE TABLE "transactions" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"date_time" TIMESTAMP NOT NULL DEFAULT (current_timestamp at time zone 'UTC'),
	"value" numeric NOT NULL,
	"rate" integer NOT NULL,
	"total" numeric NOT NULL, 
	"fgk_type" integer NOT NULL REFERENCES "types_transactions"("id"),
	"fgk_account_from" uuid NOT NULL REFERENCES "accounts"("id"),
	"fgk_account_to" uuid REFERENCES "accounts"("id"),
	CONSTRAINT "transactions_pk" PRIMARY KEY ("id")
);

INSERT INTO "types_transactions" ("name") VALUES('DEPOSIT');
INSERT INTO "types_transactions" ("name") VALUES('WITHDRAWALS');
INSERT INTO "types_transactions" ("name") VALUES('TRANSFER');