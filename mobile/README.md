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

  