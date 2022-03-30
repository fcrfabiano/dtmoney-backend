import express from 'express';
import "reflect-metadata";
import cors from 'cors';

import { routes } from './routes';

import "./shared/container";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log('Server is running!'));