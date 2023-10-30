import express from 'express';
import {createTarjeta} from '../controller/tarjeta.controller.js';
import {getAllTarjetas} from '../controller/tarjeta.controller.js';
import {getTarjetasById} from '../controller/tarjeta.controller.js';
import {deleteTarjeta} from '../controller/tarjeta.controller.js';
import {updateTarjeta} from '../controller/tarjeta.controller.js';

const api = express.Router();

api.post('/register', createTarjeta);
api.get('/getTarjetas', getAllTarjetas);
api.get('/getTarjeta/:numero', getTarjetasById);
api.delete('/deleteTarjeta/:id', deleteTarjeta);
api.put('/updateTarjeta/:id', updateTarjeta);

export default api;
