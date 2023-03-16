import  Sequelize from "sequelize";

export const sequelize = new Sequelize('PRUEBA','postgres','Proyecto2023++',{
    host: 'localhost',
    port: '5468',
    dialect: 'postgres'
})