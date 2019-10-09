const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io')
const http = require('http') // Padrão assim como o path

const routes = require('./routes')

const app = express()

const server = http.Server(app) // extraindo o servidor http do express
const io = socketio(server) // agora o servidor esta reconhecendo o websocket

io.on('connection', socket => {
  console.log('Usuario conectado', socket.id) // toda comunicação em tempo real que se conecta com o backend precisara de um id unico
})


mongoose.connect('mongodb+srv://omnistack:omnistacksenha@omnistack-aircnc-cxfji.mongodb.net/semana09', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// req.query = acessar os params (para filtros)
// req.params = acessar router params (para edição e delete)
// req.body = acessar corpo da requisição (para criação, edição) Nao reconhece formato json, necessario colocar app.use(express.json()) pra ser reconhecido


app.use(cors()) // qualquer tipo de aplicação possa acessar a api
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))) // mostrar arquivo estatico (pdf, foto)
app.use(routes) //tem que ser depois, por a execução é sequencial

server.listen(3333)