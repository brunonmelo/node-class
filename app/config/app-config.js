const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.set('view engine', 'pug');
    app.set('views', './app/views'); 

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json()); 
    
    load('infra', {cwd: 'app'})
        .then('routes')
        .into(app);

    return app;
};