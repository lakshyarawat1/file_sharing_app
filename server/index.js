import express from 'express';
import userRoutes from './routes/routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import { db_connection } from './database/db.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3001

db_connection()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/', userRoutes)

app.listen(
    PORT, () => console.log('Listening on port', PORT));