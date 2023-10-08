const express = require('express')
const app = express()
const port = 5000;

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// receber informações do corpo da requisição
app.use(express.urlencoded({
    extended: true
}))

// converter em objeto
app.use(express.json())

// utilizar arquivos estáticos como CSS
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.get('/cadastro', (req, res) => {
    
    res.sendFile(`${basePath}/cadastro.html`)                   
})

app.post('/processar', (req, res) => {
    const DadosDoFormulario = req.body;

    console.log(`
        Dados do Formulario
    `);

    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });