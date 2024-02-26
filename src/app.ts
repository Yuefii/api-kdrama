import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

const app = express()
const port = process.env.PORT || 8080

dotenv.config();

app.use(cors());
app.use(morgan('dev'));

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).json({
        "data": "hello this is works",
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})