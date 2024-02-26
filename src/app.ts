import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import express, { Request, Response } from 'express';
import { router } from './routes/router';
import path from 'path';

const app = express()
const port = process.env.PORT || 8080

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(morgan('dev'));

app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '../images', imageName);

    // Mengirimkan file gambar sebagai respons
    res.sendFile(imagePath);
});

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).json({
        data: "hello this is works",
    })
})

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        "author": "yuefii",
        "github_author": "https://github.com/yuefii",
        "github_project": "https://github.com/yuefii/api-kdrama",
        "version": "1.0.0"
    })
})

app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})