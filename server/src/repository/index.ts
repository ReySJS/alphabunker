import { Pool } from "pg";
import configDb from "../config/configDb";

class Connection {
    protected db: Pool;
    constructor() {
        this.db = configDb;
    }
}

export default Connection;