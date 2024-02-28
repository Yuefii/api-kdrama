import path from "path";
import dotenv from 'dotenv';
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { UploadedFile } from 'express-fileupload';
import {
    createKdramaService,
    deleteKdramaService,
    getAllKdramaService,
    getBySearchService,
    getImageUrlService,
    updateKdramaService,
    uploadImageUrlKdramaService
} from "../services/KDramaService"

dotenv.config();
const baseUrl = process.env.BASE_URL + 'images/';

export const createKdramaController = async (req: Request, res: Response) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body cannot be empty.' });
        }

        const { title, synopsis, type, seasons, genres } = req.body;
        const result = await createKdramaService(title, synopsis, type, seasons, genres);

        res.status(200).json({
            method: "successfull",
            data: result
        });
    } catch (error) {
        res.status(500).json({ error: 'METODE POST: Failed.' });
    }
};

export const updateKdramaController = async (req: Request, res: Response) => {
    try {
        if (!req.params) {
            return res.status(400).json({ error: 'Request params cannot be empty.' });
        }
        const { k_id } = req.params;
        const { title, type, seasons, synopsis, genres } = req.body;

        const result = await updateKdramaService(k_id, title, type, seasons, synopsis, genres);

        res.status(200).json({
            method: 'successfull',
            data: result,
        });
    } catch (error) {
        res.status(500).json({ error: 'METHOD PATCH: Failed.' });
    }
};

export const uploadImageUrlKdramaController = async (req: Request, res: Response) => {
    try {
        if (!req.files || !req.files.imageUrl) {
            return res.status(400).json({ error: 'No files uploaded.' });
        }

        if (!req.params) {
            return res.status(400).json({ error: 'Request params cannot be empty.' });
        }

        const { k_id } = req.params;
        const imageUrl = req.files.imageUrl as UploadedFile;
        const fileName = uuidv4() + path.extname(imageUrl.name);

        imageUrl.mv(path.join(__dirname, '../../', 'images', fileName), async (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }

            try {
                await uploadImageUrlKdramaService(k_id, fileName)
                res.status(200).json({
                    method: "successfull",
                    imageUrl: baseUrl + fileName
                });
            } catch (error) {
                res.status(500).json({ error: 'METODE POST: Failed.' });
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'METHOD PATCH: Failed.' });
    }
};

export const deleteKdramaController = async (req: Request, res: Response) => {
    try {
        if (!req.params) {
            return res.status(400).json({ error: 'Request params cannot be empty.' });
        }

        const { k_id } = req.params;

        await deleteKdramaService(k_id)

        res.status(200).json({
            method: 'successfull',
            message: 'K-drama resource deleted successfully.',
        });
    } catch (error) {
        res.status(500).json({ error: 'METHOD DELETE: Failed.' });
    }
};

export const getAllKdramaController = async (req: Request, res: Response) => {
    try {
        const result = await getAllKdramaService()
        const formattedResult = result.map(kdrama => ({
            title: kdrama.title,
            type: kdrama.type,
            synopsis: kdrama.synopsis,
            seasons: kdrama.seasons,
            imageUrl: baseUrl + kdrama.imageUrl,
            genres: kdrama.genres.map(genre => ({ genre: genre.genre }))
        }));
        res.status(200).json({ data: formattedResult });
    } catch (error) {
        res.status(500).json({ error: 'METHOD GET : Failed.' });
    }
};

export const getImageController = (req: Request, res: Response) => {
    const imageUrl = req.params.imageUrl;
    const imagePath = getImageUrlService(imageUrl)

    res.sendFile(imagePath);
};

export const getBySearchController = async (req: Request, res: Response) => {
    const { keyword } = req.query;
    try {
        const searchData = await getBySearchService(keyword);
        res.json(searchData);
    } catch (error) {
        res.status(500).json({ error: 'METHOD GET : Failed.' });
    }
};