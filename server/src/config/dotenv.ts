import { config } from 'dotenv';
config()

export const http = { port: process.env.PORT }
export const db = { user: process.env.DB_USER, password: process.env.DB_PASSWORD }