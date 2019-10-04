import React, { useEffect, useState } from 'react';
// carregar a lista de spots que o usuario ja criou, como carregar a informação assim que o componente é 
//exibido em tela? R: Precisamos executar uma função assim que o usuario acessa essa pagina. React usa o useEffect(importado logo acima)
// useEffect é uma função que é passado dois parametros, primeira é uma funcao e a segunda é um array de dependencias, que são
// caso mude as variaveis na dependencia, executa a função do primeiro parametro novamente. No nosso caso, como pretenndemos
// carregar essa função apenas uma vez, passaremos o array vazio
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles.css';

export default function Dashboard() {

  const [spots, setSpots] = useState([]) // vem do backend como array

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