import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg'
import './styles.css'
import api from '../../services/api'

export default function New({ history }) {

  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  // useMemo observa uma mudança de uma outra variavel e toda vez que alterar, ele gera um valor pra outra variavel
  const preview = useMemo(
    () => {
      return thumbnail ? URL.createObjectURL(thumbnail) : null
      // se existir algo no thumbnail, executa url (variavel global do html), createObjectURL (cria um url pra uma variavel temporaria), thumbnail como parametro
    }, // funcao
    [thumbnail] // array. Quais variaveis quando alteradas, farão ele executar novamente
  )

  async function handleSubmit(event) {

    event.preventDefault()
    // Envio dos dados pro backend
    // Nao será como no login, pois nesse caso estamos usando o multipart form
    const data = new FormData()
    const user_id = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    await api.post('/spots', data, {
      headers: { user_id }
    })
    history.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        onChange={event => setThumbnail(event.target.files[0])}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por virgula)</span></label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button className="btn">Cadastrar</button>
    </form>
  )
}