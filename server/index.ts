import { http } from "./src/config/dotenv";
import app from "./src/config/express";
console.log(http.port)
app.listen(http.port)