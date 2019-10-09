# Omnistack - Aircnc

### 1º Passo:
  Criar a rota de Login da aplicação. Utilizando o modelo MVC (sem o view).

 * ``Model`` = representa uma tabela/schema do banco de dados, entidade dentro da aplicação (Rota usuario?, arquivo User.js pois representa uma entidade na aplicação)

  * ``Controller`` =  Regra de negocio da aplicação. Por padrão do MVC devemos usar dentro de um controller os seguintes metodos:

  ```index``` = criando um metodo que vai retornar uma listagem de sessoes

  ```show ```= listar uma unica sessão

  ```store``` = quando se quer criar uma sessão

  ```update``` = alterar uma sessão

  ```destroy``` = terminar uma sessão

### 2° Passo

   * Criar a rota Spot, onde será um espaço para adicionar/cadastrar lugares a serem alugados
  Os campos serão: Imagem, company, price, techs

  * <p><span style="color:red"><em>*WARNING*</em></span></p>
      O Json nao reconhece o envio de arquivos. Ao inves de usar Json usa-se multipart form

      Express nao reconhece o multipart Form

      Pra ser reconhecido, é necessario uma lib chamada multer: 
      ``yarn add multer``
      Configurações do multer encontra-se em src/config/upload.js

  * Criar rota para listagem de itens cadastrados.
  * Criar um filtro para as tecnologias.

### Passo 3°

  * Criar rota para o Dashboard da aplicação, onde irá mostrar spots cadastrados pra serem mostrados no dashboard


### Passo 4

  * Criar rota de reservas
   
---------------------------------------------------------

---------------------------------------------------------

# Comunicação em tempo real com SOCKET.io

É uma ferramenta que vai abstrair algumas funcionalidade do protocolo web sockets que é implementado pelo node, para fazer a com que a comunicação em tempo real seja mais facil, amigavel.

#### baixar dependencia:
* ``yarn add socket.io``

* ``npm install socket.io``

### Passo 1:

Permitir que o servidor ouça tanto o protocolo HTTP quanto o Web Socket.
