const connectFactory = require('./connectFactory')();

class ProdutosDao {
    constructor() {
        this._db = connectFactory();
    }

    getLivros() {
        return this._db.any('select * from livros')
        .catch(err => console.error(err));
    }

    addLivro() {
        return this._db.none(`INSERT INTO livros(titulo, descricao, preco) VALUES ('${livro.titulo}', '${livro.descricao}', ${livro.preco})`);
    }
    
}

module.exports = () => {
    return ProdutosDao;
};