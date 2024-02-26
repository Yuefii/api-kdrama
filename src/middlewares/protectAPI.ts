import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

export const protectAPI = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};