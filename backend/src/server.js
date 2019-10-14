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

mongoose.connect('mongodb+srv://omnistack:omnistacksenha@omnistack-aircnc-cxfji.mongodb.net/semana09', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// req.query = acessar os params (para filtros)
// req.params = acessar router params (para edição e delete)
// req.body = acessar corpo da requisição (para criação, edição) Nao reconhece formato json, necessario colocar app.use(express.json()) pra ser reconhecido

const connectedUsers = {} // não é o melhor jeito de armazenar num aplicativo em produção, em ambientes de produção indicado o uso do Reddis

io.on('connection', socket => {
  // console.log('Usuario conectado', socket.id) // toda comunicação em tempo real que se conecta com o backend precisara de um id unico
  //console.log(socket.handshake.query)
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;

})

app.use((req, res, next) => {
  req.io = io // aqui faz com que todas as rotas da aplicação tenha acesso ao io, que permite enviar e receber do front ou do mobile
  req.connectedUsers = connectedUsers // acesso aos usuarios acessados na aplicação

  return next() // pra seguir o fluxo normal da aplicação. Sem isso, a aplicação fica presa nesse bloco
})


app.use(cors()) // qualquer tipo de aplicação possa acessar a api
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))) // mostrar arquivo estatico (pdf, foto)
app.use(routes) //tem que ser depois, por a execução é sequencial

server.listen(3333)