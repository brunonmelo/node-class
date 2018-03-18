const initApp = require('./app/config/app-config');

app = initApp();

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000');
});