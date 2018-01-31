module.exports = (app) => {
    const ProdutosDao = app.infra.ProdutosDao;
	let produtosDao = new ProdutosDao();
	
    app.get('/produtos', (req, resp) => {
        produtosDao.getLivros()
            .then(result => resp.render('produtos', {title: 'Produtos', produtos: result}));
    });

    app.get("/produtos/novo", (req, resp) => {
        resp.render('form', {title: "Novo livro"});
    });

    app.post('/produtos',  (req, resp) => {
        const produto = req.body;
        produtosDao.addLivro(produto)
            .then(() => resp.redirect('/produtos'));
    })
};