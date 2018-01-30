const db = require('./connectFactory');

function getLivros() {     
    return db.any('select * from livros')
        .catch(err => console.error(err));
}

function addLivro(livro) {
    return db.none(`INSERT INTO livros(titulo, descricao, preco) VALUES ('${livro.titulo}', '${livro.descricao}', ${livro.preco})`);
}

module.exports = {
    getLivros,
    addLivro
};