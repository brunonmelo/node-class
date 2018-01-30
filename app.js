const appConfig = require('./app/config/app-config');

app = appConfig();

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000');
});