import express from 'express';
import appController from '../controller/AppController';
import userController from '../controller/UsersController';
import authController from '../controller/AuthController';
import filesController from '../controller/FilesController';

const router = express.Router();

router.get('/status', (req, res) => appController.getStatus(req, res));
router.get('/stats', (req, res) => appController.getStats(req, res));
router.post('/users', (req, res) => userController.postNew(req, res));
router.get('/users/me', (req, res) => userController.getMe(req, res));
router.get('/connect', (req, res) => authController.getConnect(req, res));
router.get('/disconnect', (req, res) => authController.getDisconnect(req, res));
router.post('/files', (req, res) => filesController.postUpload(req, res));
router.get('/files/:id', (req, res) => filesController.getShow(req, res));
router.get('/files', (req, res) => filesController.getIndex(req, res));
router.put('/files/:id/publish', (req, res) => filesController.putPublish(req, res));
router.put('/files/:id/unpublish', (req, res) => filesController.putUnpublish(req, res));

router.get("/files/:id/data", (req, res) => filesController.getFile(req, res));
export default router;
