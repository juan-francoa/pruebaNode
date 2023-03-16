import { empleado } from "../models/empleado.js";


export const getempleado = async (req, res) => {
    try {
        const empleados = await empleado.findAll()
        res.send(empleados)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const createEmpleado = async (req, res) => {
    const { nombre,
        nif,
        apellido1,
        apellido2,
        codigo_departamento } = req.body
    try {
        const newDepartament = await empleado.create({
            nombre,
            nif,
            apellido1,
            apellido2,
            codigo_departamento
        })
        res.send('Creating Departament')
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getOneempleado = async (req, res) => {
    try {
        const { codigo } = req.params
        const empleado = await empleado.findOne({
            where: {
                codigo
            }
        })
        if (!empleado)
            return res.status(404).json({ message: 'Department not fount' })
        res.send(empleado)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateEmpleado = async (req, res) => {
    try {
        const { codigoId } = req.params;
        const { nombre,nif,
            apellido1,
            apellido2,
            codigo_departamento  } = req.body;
        const departament = await empleado.findByPk(codigoId);
        departament.nombre = nombre
        departament.nif = nif
        departament.apellido1 = apellido1
        departament.apellido2 = apellido2
        departament.codigo_departamento = codigo_departamento
        await departament.save()
        res.send(departament)
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteEmpleado = async (req, res) => {
    try {
        const { codigo } = req.params;
        await empleado.destroy({
            where: {
                codigo
            },
        });
        res.sendStatus(204);
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}