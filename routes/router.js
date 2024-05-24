import express from 'express'
import { agregarEstudiante, registros, rutEstudiante, editarEstudiante, borrarEstudiante } from '../controller/controller.js';

const router = express.Router();

router.post('/nuevo', agregarEstudiante);

router.get('/registro', registros);

router.get('/estudiante/rut', rutEstudiante);

router.put('/editar/rut', editarEstudiante);

router.delete('/borrar/nombre', borrarEstudiante);

export default router;