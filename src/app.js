import express from "express";
import projectsRoutes from './routes/deparatamento.routes.js'
import empleadosRoutes from "./routes/empleado.router.js"

const app =  express();

app.use(express.json());

app.use(projectsRoutes);
app.use(empleadosRoutes);

export default app;