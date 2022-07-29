const fs = require('fs');

function escreveArquivo() {
  fs.writeFileSync('file2.json', 'Qualquer coisa');
  return 2;
}

module.exports = escreveArquivo;

