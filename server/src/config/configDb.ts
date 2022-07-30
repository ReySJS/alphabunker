import { Pool } from "pg"
import { db } from "./dotenv"

export default new Pool({
    user: db.user,
    password: db.password,
    host: "localhost",
    port: 5433
});