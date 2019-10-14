import React, { useEffect, useState, useMemo } from 'react';
// carregar a lista de spots que o usuario ja criou, como carregar a informação assim que o componente é 
//exibido em tela? R: Precisamos executar uma função assim que o usuario acessa essa pagina. React usa o useEffect(importado logo acima)
// useEffect é uma função que é passado dois parametros, primeira é uma funcao e a segunda é um array de dependencias, que são
// caso mude as variaveis na dependencia, executa a função do primeiro parametro novamente. No nosso caso, como pretenndemos
// carregar essa função apenas uma vez, passaremos o array vazio

import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles.css';

import socketio from 'socket.io-client'
import { request } from 'http';

export default function Dashboard() {
  const [spots, setSpots] = useState([]) // vem do backend como array
  const [requests, setRequests] = useState([])

  const user_id = localStorage.getItem('user')
  // useMemo = memorizar o valor de uma variavel até que alguma coisa mude
  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: { user_id }
  }), [user_id]) // só fazer o reload da conexão se o user_id mudar (usuario mude)

  useEffect(() => {
    socket.on('booking_request', data => {
      setRequests([...requests, data])
    })
  }, [requests, socket])

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user') // buscar o id dentro do localStorage. user é o nome que definimos em outro arquivo 
      const response = await api.get('/dashboard', {
        headers: { user_id }
      })

      setSpots(response.data)
    }

    loadSpots()
  }, [])

  return (
    <>
      <ul className="notifications">
        {requests.map(request => (
          <li key={request.id}>
            <p>
              <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> 
              para a data: <strong>{request.date}</strong>
            </p>
            <button className="accept">ACEITAR</button>
            <button className="reject">REJEITAR</button>
          </li>
        ))}
      </ul>
      <ul className='spot-list'>
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : `GRATUITO`}</span>
          </li>
        ))}
      </ul>
      <Link to='/new'>
        <button className="btn">
          Cadastrar novo spot
       </button>
      </Link>
    </>
  )
}