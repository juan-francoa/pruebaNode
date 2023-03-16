import { departamento } from "../models/departamento.js"
import { empleado } from "../models/empleado.js"

export const getDepartaments = async (req, res) => {
    try {
        const departaments = await departamento.findAll()
        res.send(departaments)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const createDepartament = async (req, res) => {
    const { nombre, presupuesto } = req.body
    try {
        const newDepartament = await departamento.create({
            nombre,
            presupuesto
        })
        res.send('Creating Departament')
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getOneDepartaments = async (req, res) => {
    try {
        const { codigo } = req.params
        const departaments = await departamento.findOne({
            where: {
                codigo
            }
        })
        if (!departaments)
            return res.status(404).json({ message: 'Department not fount' })
        res.send(departaments)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateDepartament = async (req, res) => {
    try {
        const { codigoId } = req.params;
        const { nombre, presupuesto } = req.body;
        const departament = await departamento.findByPk(codigoId);
        departament.nombre = nombre
        departament.presupuesto = presupuesto
        await departament.save()
        res.send(departament)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteDepartament = async (req, res) => {
    try {
        const { codigo } = req.params;
        await departamento.destroy({
            where: {
                codigo,
            },
        });
        res.sendStatus(204);
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getempleadosDepartaments = async (req, res) => {
    const { codigo } = req.params;
    const empleados = await empleado.findAll({
        where: {
            codigo_departamento: codigo
        }
    });
    res.json(empleados)
}