module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.render('main', {title: 'Main page'});
    });
};