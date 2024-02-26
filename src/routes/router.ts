import express from 'express';
import {
    createKdramaController,
    deleteKdramaController,
    getAllKdramaController,
    updateKdramaController
} from '../controllers/KDramaController';
import { protectAPI } from '../middlewares/protectAPI';

export const router = express.Router()

router.post('/k-drama', protectAPI, createKdramaController);
router.patch('/k-drama/:k_id', updateKdramaController);
router.delete('/k-drama/:k_id', deleteKdramaController);
router.get('/k-drama', getAllKdramaController);