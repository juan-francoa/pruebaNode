import app from "./app.js"
import { sequelize } from "./database/database.js"
import './models/empleado.js'
import './models/departamento.js'

async function main(){
try{
    await sequelize.sync({force: false})
    app.listen(1234)
    console.log("Server is listening on port", 1234)

}
catch(error){
    console.log('Unable to connect to the database:',error);
}
}

main();
