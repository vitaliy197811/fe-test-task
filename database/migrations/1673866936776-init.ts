import { MigrationInterface, QueryRunner } from "typeorm";

export class init1673866936776 implements MigrationInterface {
    name = 'init1673866936776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "track" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hours" integer NOT NULL, "message" character varying NOT NULL, "done" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_0631b9bcf521f8fab3a15f2c37e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "track" ADD CONSTRAINT "FK_92ddd84d4282ef453317fcd5529" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "track" DROP CONSTRAINT "FK_92ddd84d4282ef453317fcd5529"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "track"`);
    }

}
