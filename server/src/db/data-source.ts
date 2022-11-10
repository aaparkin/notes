import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "dev",
  password: "mnene30mne31",
  database: "notes",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
