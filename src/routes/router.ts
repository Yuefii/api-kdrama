import express from 'express';
import { protectAPI } from '../middlewares/protectAPI';
import {
    createKdramaController,
    deleteKdramaController,
    getAllKdramaController,
    updateKdramaController,
    uploadImageUrlKdramaController
} from '../controllers/KDramaController';

export const router = express.Router()

router.post('/k-drama', protectAPI, createKdramaController);
router.patch('/k-drama/:k_id', protectAPI, updateKdramaController);
router.patch('/k-drama/:k_id/images', protectAPI, uploadImageUrlKdramaController);
router.delete('/k-drama/:k_id', protectAPI, deleteKdramaController);
router.get('/k-drama', getAllKdramaController);