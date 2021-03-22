const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Postagem.create({
//   titulo: "UM TITULO QUALQUER",
//   conteudo: "adsasdasdasdafdgdfg dfsdf sdfsdfsdfsde4rtwfth sdfsd",
// });

const Usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// Usuario.create({
//   nome: "Pedro",
//   sobrenome: "Rodrigues",
//   idade: 20,
//   email: "blabla@mail.com",
// });

//Postagem.sync({ force: true });
//Usuario.sync({ force: true });

// sequelize
//   .authenticate()
//   .then(function () {
//     console.log("Conectado com sucesso!");
//   })
//   .catch(function (erro) {
//     console.log("Fala ao se conectar: " + erro);
//   });
