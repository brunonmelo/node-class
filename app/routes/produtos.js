module.exports = (app) => {
    const produtosDao = new app.infra.ProdutosDao();

    app.get('/produtos', (req, resp) => {
        produtosDao.getLivros()
            .then(result => resp.render('produtos', {title: 'Produtos', produtos: result}));
    });

    app.get("/produtos/novo", (req, resp) => {
        resp.render('form', {title: "Novo livro"});
    });

    app.post('/produtos/salva',  (req, resp) => {
        console.log(typeof req.body);
        produtosDao.addLivro(req.body)
            .then(result => resp.render('main', {title: 'Resultado', titulo: result}));
    })
};