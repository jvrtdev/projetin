
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

// Middleware para fazer o parsing do corpo da requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
    const dadosRecebidos = req.body;
    console.log('dados recebidos: ', dadosRecebidos)

    res.send('Requisição POST recebida com sucesso!');

})


app.listen(port, () => {
    console.log(`Server running...http://localhost:${port}`)
})