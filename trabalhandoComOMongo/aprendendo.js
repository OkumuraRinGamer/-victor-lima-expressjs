const mongoose = require("mongoose");

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Conectado...");
  })
  .catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err);
  });
// Model - Usuários
// Definindo o model
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  idade: {
    type: Number,
    require: true,
  },
  pais: {
    type: String,
  },
});
// Collection
mongoose.model("usuarios", UsuarioSchema);

const Pedro = mongoose.model("usuarios");

new Pedro({
  nome: "Jhon",
  sobrenome: "Doe",
  idade: 34,
  email: "jhon@doe.com",
  pais: "EUA",
})
  .save()
  .then(() => {
    console.log("Usuario cadastrado com sucesso!");
  })
  .catch((err) => {
    console.log("Houve um erro ao registrar o usuário: " + err);
  });
