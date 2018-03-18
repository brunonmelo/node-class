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
        if(livro.titulo && livro.descricao && livro.preco) {
            return this._db
                .none(`INSERT INTO livros(titulo, descricao, preco) VALUES ($1, $2, $3)`,
                    [
                        livro.titulo,
                        livro.descricao,
                        livro.preco
                    ])
                .catch(err => console.error(err));
        } else {
            throw new error('Dados do livro inválidos');
        }
    }
}

module.exports = () => {
    return ProdutosDao;
};