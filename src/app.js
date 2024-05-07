import express from 'express';
import CadastroController from './app/controllers/CadastroController.js';

const app = express()


app.use(express.json())


app.get('/dados', CadastroController.index)


app.get('/dados/:id', CadastroController.show)


app.post('/dados', CadastroController.store)


app.put('/dados/:id', CadastroController.update)


app.delete('/dados/:id', CadastroController.delete)


export default app