import express from 'express';
import {
    createKdramaController,
    deleteKdramaController,
    getAllKdramaController,
    updateKdramaController
} from '../controllers/KDramaController';

export const router = express.Router()

router.post('/k-drama', createKdramaController);
router.patch('/k-drama/:k_id', updateKdramaController);
router.delete('/k-drama/:k_id', deleteKdramaController);
router.get('/k-drama', getAllKdramaController);