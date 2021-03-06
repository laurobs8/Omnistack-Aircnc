# Aplicativo mobile Aircnc

Criação do aplicativo mobile do projeto da Omnistack-aircnc. Nesse diretorio, vou <s>tentar</s> listar coisas mais importantes que aprendi realizando esse tutorial.

Nesse projeto, iniciaremos com uma novidade que se chama ``expo``, que é uma ferramenta permite facil acesso a api nativa do dispositivo sem a necessidade de instalação qualquer dependencia  ou alterar o codigo nativo. Permite a inicialização muito rapida, toda a parte complicada de instalação foi abstraida. Usaremos expo como emulador (no meu caso, no smartphone).

## passo para a utilização do expo:
  * Abrir o projeto com o npm start ou expo start;
  * Baixar na playstore o aplicativo expo;
  * Fazer o cadastro;
  * Ao abrir a tela no browser, habilitar o Tunnel;
  * Escanear o QR code; 
  * Irá fazer o bundle, e download no dispositivo pra mostrar a tela em desenvolvimento.

## Pontos importantes:

   * Uso do pacote ``'react-native'`` ao invés de ``'react-dom'`` 
   * Import de elementos como Text, View e Stylesheet do react native para funcionalidades basicas

   * Text no react native é apenas um texto simples, por nao usar tags html qualquer texto que quiser modificar (sublinhar, negrito ou italico) precisa-se estilizar no css

   * estilização Css é feito no mesmo aquivo, passando numa variavel objetos javascript pra estilização. 
   Exemplo:
  ```
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
```  
  * Toda a estilização do react-native é feita com flexbox, e flexDirection: column
  * Sempre será strings a nao ser que seja um numero.  

## Passo 1

  Configurar roteamento/navegação entre paginas da aplicação. Para isso, feito a instalação do `'react-navigation'`.
  * yarn add react-navigation
  * npm install react-navigation

Configuração de rotas no login, usando conceitos como:
 View
  KeyboardAvoidingView = Para o teclado subir e nao cobrir o componente (Android essa feature é automatica, ios nao)

   TextInput = Input, area de entrada de text;

   Platform = Verifica a plataforma em que aplicação está
  
   StyleSheet = estilo
  
   Image = Imagem
  
   Text = Texto simples
  
   TouchableOpacity = Botão que ao tocar faz o efeito de 
   opacidade;

   OnPress =  ao pressionar

   * Conexão com a API usamos axios, porém, o endereço da api vem do localhost, que irá funcionar apenas em emuladores no laptop, pra solucionar isso, copiaremos o endereço exposto no expo

   AsyncStorage = Armazenar alguma informação no dispositivo

   navigation = No react native nao se usa o history como na aplicação web, para navegar o usuario pra outra tela usa-se navigation.navigate('nome da tela')

   useEffect = executar uma ação assim que o usuario chega na tela, no nosso caso, executar a ação de navegação se o usuario ja estiver feito o login

## Passo 2

Construção e configuração da pagina que irá listar os spots. Ao sair da pagina de login o usuario será redirecionado automaticamente para a pagina de Listagem.

Nessa etapa, temos conceitos novos como de componente externo e também bastante coisa oriunda do react web.

Componente externo: 
  * Nesse caso, usado pra quando houver repetições na tela. Exemplo: 3 spots, um ao lado do outro para tecnologias React, e outros 3 spots pra tecnologia Node, um encima do outro. É a mesma organização porém com dados diferentes

  Criação de propriedade:
  Propriedade são elementos passados junto com os componentes, exemplo style, behavio, source etc. E podemos criar qualquer propriedade no React. Após criar o componente e fazer referencia na pagina list, colocamos uma propriedade chamada techs. Definimos essa propriedade no componente externo, passando como parametro na função principal. Colocamos: 

  ```
 export default function SpotList(props) {
  return <Text>{props.tech}</Text>
}
 
  OU... 

  export default function SpotList({ tech }) {
  return <Text>{tech}</Text>
}
  ```

* Buscar dados filtrados do backend
* Estilizar os campos dos dados
* Barra de rolagem (scroll), usando um componente destinado pra listas do React chamado FlatList.

### Propriedades do Flatlist que usamos:
* style = para estilizar;
* data = Array de onde vem as informações;
* keyExtractor = extrair um dado unico pra cada elemento, que é o id. Percorremos os dados e extrai-se o id de todos;
* horizontal = indica que será um scroll horizontal;  
* showsHorizontalScrollIndicator={false/true} = mostrar ou nao barra de rolagem;
* renderItem = como esses dados serão mostrados na tela. 

Dentro do renderItem temos uma observação: Na propriedade source será um pouco diferente, pois  no source quando está no formato ``source={item.thumbnail_url}`` irá procurar um arquivo fisico que nao está no projeto, então como é uma url(arquivo externo) vamos passar um objeto ``source={{ uri: item.thumbnail_url }}`` 

### Navegação

Navegação também se diferencia. No nosso caso, o SpotList nao é uma pagina como os outros então ele nao tem acesso a propriedade navigation por padrão. Por isso, o react-navigation tem uma propriedae chamada withNavigation que é pra adicionar essa propriedade em qualquer componente que nao seja uma pagina.

Como faremos?

Tirar o ``export default`` do começo e colocar no final ``export default withNavigation(SpotList)``. Isso pra ter acesso a propriedade navigation que irá na linha 6, na funcao principal ``function SpotList({ tech, navigation }) {..}``

## Passo 3

Construção da pagina de agendamentos, lá teremos um campo para colocar a data de reserva, botao de cancelar e de confirmar a reserva.

Ao confirmar a reserva, irá mandar a solicitação para a api (backend) com os dados da reserva.

Para acessar, abrimos o mongo atlas, clicar na opção connect e connect with compass

no mongo compass baixado na maquina, entrar com as credenciais, clicar no nome do projeto, booking e estará la as requisições de reservas.