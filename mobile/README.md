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



