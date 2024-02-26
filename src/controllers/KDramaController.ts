import { Request, Response } from "express";
import { 
    createKdramaService, 
    deleteKdramaService, 
    getAllKdramaService, 
    updateKdramaService 
} from "../services/KDramaService"

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
        const formattedResult = result.map(movie => ({
            title: movie.title,
            type: movie.type,
            synopsis: movie.synopsis,
            seasons: movie.seasons,
            genres: movie.genres.map(genre => ({ genre: genre.genre }))
        }));
        res.status(200).json({ data: formattedResult });
    } catch (error) {
        res.status(500).json({ error: 'METHOD GET : Failed.' });
    }
};