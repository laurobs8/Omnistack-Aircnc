
# Rodar o projeto 
 * yarn start
 * npm start

Abrirá no endereço http://localhost:3000 no browse

# Funcionalidade do frontend

## 1 - Manipular email ao digitar no input

Precisamos pegar a informação passada no input (email) jogar para o backend, o backend irá devolver um id que será armazenado para que possa ser usado no restante da aplicação (como se fosse uma autenticação, ações que fizer usando esse id estará registrado).
Para pegar essa informação, jogar no REST do backend e devolver o id, precisamos de uma biblioteca chamada axios.

* ``yarn add axios``
* ``npm i axios``

## 2 - Criação das rotas

Criado o arquivo de rotas que fará a navegação da aplicação. 
Foram criadas as paginas de Login, Dashboard e a New. Conceitos novos do React como <> </> que são fragment no react, que é basicamente uma div que nao aparece no html e history que permite o redirecionamento automatico pra outra rota.

Pacotes adicionados:

* ``yarn add react-router-dom``