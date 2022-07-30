"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("./src/config/dotenv");
const express_1 = __importDefault(require("./src/config/express"));
console.log(dotenv_1.http.port);
express_1.default.listen(dotenv_1.http.port);
