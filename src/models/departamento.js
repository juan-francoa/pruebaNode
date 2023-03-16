import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { empleado } from './empleado.js'

export const departamento = sequelize.define('departamento', {
    codigo:{
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(100)
    },
    presupuesto:{
        type: DataTypes.DOUBLE
    }
}, {
    timestamps: false
});

departamento.hasMany(empleado, {
    foreignKey : 'codigo_departamento',
    sourceKey: 'codigo'
})

empleado.belongsTo(departamento,{
    foreignKey : 'codigo_departamento',
    targetId: 'codigo'
})