import { Router } from "express";
import {getempleado, createEmpleado, updateEmpleado, deleteEmpleado, getOneempleado} from '../controllers/empleado.controller.js'
const router = Router()

router.get('/empleado', getempleado)
router.post('/empleado', createEmpleado)
router.put('/empleado/:codigoId', updateEmpleado)
router.delete('/empleado/:codigo', deleteEmpleado)
router.get('/empleado/:codigo', getOneempleado)

export default router;




