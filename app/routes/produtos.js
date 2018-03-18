const o2x = require('object-to-xml');

module.exports = (app) => {
    const ProdutosDao = app.infra.ProdutosDao;
	let produtosDao = new ProdutosDao();
	
    app.get('/produtos', (req, resp) => {
        produtosDao.getLivros()
            .then(result => {
                resp.format({
                    html: () => { resp.render('produtos', {title: 'Produtos', produtos: result}) },
                    json: () => { resp.json({produtos: result}); },
                    'text/xml': () => { resp.end(o2x({
                        '?xml version="1.0" encoding="utf-8"?' : null,
                        produtos: {
                            produto: result
                        }
                    })); }
                });
            });
    });
	
    app.get("/produtos/novo", (req, resp) => {
        resp.render('form', {title: "Novo livro"});
    });

    app.post('/produtos',  (req, resp) => {
        const produto = req.body;
        console.log(produto);
        produtosDao.addLivro(produto)
            .then(() => resp.redirect('/produtos'))
            .catch(err => resp.white('erro ao salvar o novo produto!: ' + err));
    })
};