const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender Node.Js", 
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4

    }


    res.render('post', { post })
})

app.get('/dashboard', (req, res) => {
const itens = ['itens a', 'itens b', 'itens c']

    res.render('dashboard', { itens })
})

app.get('/', (req, res) => {
    const usuario  = {
        nome: "Maedes",
        profissao: "Desenvolvedor Web",
        idade: 20
    }
const auth = false

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})