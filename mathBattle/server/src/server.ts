import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import {config} from "dotenv";
import { openConnection } from "./database/open-connection";
import morgan from 'morgan';
import helmet from 'helmet';

config();

const app: Express = express();
app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));


const PORT: string | number = process.env.PORT || 3000;
// openConnection();
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
