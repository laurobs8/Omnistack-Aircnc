
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

## 3 - Dashboard

Colocar as informação vindas do backend para ser mostrada na tela dashboard. Carregar a lista de spots que o usuario ja criou. Como carregar a informação assim que o componente é exibido em tela? R: Precisamos executar uma função assim que o usuario acessa essa pagina. React usa o useEffect, useEffect é uma função que é passado dois parametros, primeira é uma funcao e a segunda é um array de dependencias, que são caso mude as variaveis na dependencia, executa a função do primeiro parametro novamente. No nosso caso, como pretendemos carregar essa função apenas uma vez, passaremos o array vazio.
Ajustes feitos no backend:
* nome da rota dashboard
* passar a imagem do spot cadastrado corretamente pro frontend
* Mostrar imagem (arquivo estatico) no browser

## 4 - Envio dos dados para o backend

Envio dos dados de um formulario de cadastro para o backend, foi utilizado conceitos de react de useMemo, que observa uma mudança de uma outra variavel e toda vez que alterar, ele gera um valor pra outra variavel, envio diferenciou do ja feito no login inicial, pois ja nao era com json e sim com o multipart Form e contem arquivo de imagem, nesse caso foi aplicado este conceito.

--------------------------------------------------------------------------------

## socket.io-client

Comunicação em tempo real. Aqui, no front-end iremos fazer a conexão com o backend pra ser reconhecido como forma de conexão o web socket