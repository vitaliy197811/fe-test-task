import { dataSource } from './database-init';
import { CreateGenreSeeds } from './seeds/admin.seed';

dataSource.initialize().then(() => {
  new CreateGenreSeeds();
});
