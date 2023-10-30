import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tarjetaRoutes from './api/routes/tarjeta.routes.js';
import dotenv from "dotenv";
import {connection} from "./database/connection.js"
connection();
const port = 3000;

const app = express();
dotenv.config();
console.log("a", dotenv.config);
console.log("API exitosa");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tarjeta', tarjetaRoutes);

app.listen(port, ()=>{
  console.log("Servidor de node corriendo en el puerto:",port);
})
  
