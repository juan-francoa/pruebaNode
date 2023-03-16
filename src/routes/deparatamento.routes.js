import { Router } from "express";
import {getempleadosDepartaments, getOneDepartaments, getDepartaments, createDepartament, updateDepartament, deleteDepartament } from "../controllers/departamento.controller.js";

const router = Router()

router.get('/departamento', getDepartaments)
router.post('/departamento', createDepartament)
router.put('/departamento/:codigoId', updateDepartament)
router.delete('/departamento/:codigo', deleteDepartament)
router.get('/departamento/:codigo',getOneDepartaments)
router.get('/departamento/:codigo/empleados',getempleadosDepartaments)


export default router;




