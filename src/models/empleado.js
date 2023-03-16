import {DataTypes} from 'sequelize'
import  {sequelize} from '../database/database.js'

export const empleado = sequelize.define('empleado',{
    codigo:{
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    nif:{
        type: DataTypes.STRING(9)
    },
    nombre:{
        type: DataTypes.STRING(100)
    },
    apellido1:{
        type: DataTypes.STRING(100)
    },
    apellido2:{
        type: DataTypes.STRING(100)
    },
    codigo_departamento:{
        type: DataTypes.INTEGER(10)
    },
},{
    timestamps: false
})