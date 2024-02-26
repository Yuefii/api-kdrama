import { Request, Response } from "express";
import { createKdramaService, deleteKdramaService, getAllKdramaService, updateKdramaService } from "../services/KDramaService"

export const createKdramaController = async (req: Request, res: Response) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body cannot be empty.' });
        }

        const { title, type, seasons } = req.body;
        const result = await createKdramaService(title, type, seasons);

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
        const { title, type, seasons }: { title: string, type: string, seasons: number } = req.body;

        const result = await updateKdramaService(k_id, title, type, seasons);

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
        const movies = await getAllKdramaService()
        res.status(200).json({ data: movies });
    } catch (error) {
        res.status(500).json({ error: 'METHOD GET : Failed.' });
    }
};