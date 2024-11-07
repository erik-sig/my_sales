import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const port = process.env.PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/database/entities/*.{ts, js}'],
  migrations: ['./src/shared/typeorm/migrations/*.{ts, js}'],
});
