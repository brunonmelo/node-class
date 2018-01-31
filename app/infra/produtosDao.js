const connectFactory = require('./connectFactory')();

class ProdutosDao {
    constructor() {
        this._db = connectFactory();
    }

    getLivros() {
        return this._db.any('select * from livros')
            .catch(err => console.error(err));
    }

    addLivro(livro) {
        return this._db
            .none(`INSERT INTO livros(titulo, descricao, preco) VALUES ($1, $2, $3)`,
                [
                    livro.titulo,
                    livro.descricao,
                    livro.preco
                ])
            .catch(err => console.error(err));
    }
    
}

module.exports = () => {
    return ProdutosDao;
};