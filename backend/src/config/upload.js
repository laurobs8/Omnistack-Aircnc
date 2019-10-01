const multer = require('multer')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({ //como o multer vai armazenar os arquivos que receber
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // Path é necessario devido a ter dois niveis de pra tras
    // pra achar a pasta uploads, o windows nao reconhece a barra e sim 
    //a barra inversa, sendo assim, o path faz com que a separação seja 
    //feita de modo automatica de acordo com o sistema operacional. O __dirname assegura que a pasta será encontrada
    filename: (req, file, cb) => { // Por padrão, gera-se um nome aleatorio para o arquivo. 
      // req =  mesma requisicao
      // file = arquivo em si, extensão... informações em geral
      // cb = callback, funcao a ser chamada assim que o arquivo tiver pronto
      const ext = path.extname(file.originalname)
      const name = path.basename(file.originalname, ext)
      cb(null, `${name}-${Date.now()}${ext}`)
    }// fieldname nome do arquivo do cliente // Date.now garante que cada imagem será unica// path.extname busca a extensão  
  })
}