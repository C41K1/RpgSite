const Login = require("./src/pages/api/models/login");

Login.sync({ force: true }).then(() => { console.log("Sincronizando Banco"); });