module.exports = (app) => {
    const db = app.infra.produtosDao;
    
    app.get('/produtos', (req, resp) => {
        db.getLivros()
            .then(result => resp.render('produtos', {title: 'Produtos', produtos: result}));
    });

    app.get("/produtos/novo", (req, resp) => {
        resp.render('form', {title: "Novo livro"});
    });

    app.post('/produtos/salva',  (req, resp) => {
        console.log(typeof req.body);
        db.addLivro(req.body)
            .then(result => resp.render('main', {title: 'Resultado', titulo: result}));
    })
};