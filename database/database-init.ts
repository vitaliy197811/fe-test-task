import { DataSource, DataSourceOptions, EntityTarget } from 'typeorm';
import { User } from "../src/modules/users/entities/user.entity";
import { Track } from "../src/modules/track/entities/track.entity";

type EntityType = any;

export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: '172.17.0.1', // 172.18.0.1 or localhost
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test-task',
  synchronize: false,
  entities: [
    User,
    Track
  ],
  migrationsTableName: 'migrations',
  migrations: ['./dist/database/migrations/*{.ts,.js}'],
};

// for docker init migration
export const dataSource = new DataSource(typeormConfig);

export class Seeds {
  constructor(
    entityName: EntityTarget<EntityType>,
    value: any,
    seedName: string,
  ) {
    console.log('-------- Seeds ---------');
    dataSource
      .getRepository(entityName)
      .find(value)
      .then((result) => {
        result.length
          ? console.log('\x1b[30m', `${seedName} - found exists value`)
          : dataSource
            .getRepository(entityName)
            .createQueryBuilder()
            .insert()
            .into(entityName)
            .values(value)
            .execute()
            .then(() => console.log('\x1b[32m', `${seedName} - successful`));
      });
  }
}
