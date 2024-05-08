import express from 'express';
import CadastroController from './app/controllers/CadastroController.js';
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(cors())


app.get('/cadastros', CadastroController.index)


app.get('/cadastros/:id', CadastroController.show)


app.post('/cadastros', CadastroController.store)


app.put('/cadastros/:id', CadastroController.update)


app.delete('/cadastros/:id', CadastroController.delete)


export default app