import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg'
import api from './services/api'

function App() {

  const [email, setEmail] = useState('') // toda vez que esse campo for alterado, a variavel email ira atualizar, setEmail -> atualizar o valor do email

  async function handleSubmit(event) {
    event.preventDefault(); // previnir do efeito padrao de submit, a troca de tela

    // console.log(email)

    const response = await api.post('/sessions', { email })
  
    const {_id} = response.data

    localStorage.setItem('user', _id)
  }

  return (
    <div className="container">
      <img src={logo} alt="Aircnc" />

      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={event => setEmail(event.target.value)} />

          <button className="btn" type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
