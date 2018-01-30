const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.set('view engine', 'pug');
    app.set('views', './app/views'); 

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));
    
    load('infra', {cwd: 'app'})
        .then('routes')
        .into(app);

    return app;
};