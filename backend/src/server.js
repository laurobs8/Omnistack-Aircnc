const express = require('express')

const app = express()

// req.query = acessar os params (para filtros)
// req.params = acessar router params (para edição e delete)
// req.body = acessar corpo da requisição (para criação, edição) Nao reconhece formato json, necessario colocar app.use(express.json()) pra ser reconhecido

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: "Hello Omnistack" }) // json tem que colocar um objeto ou um array 
})

app.listen(3333)