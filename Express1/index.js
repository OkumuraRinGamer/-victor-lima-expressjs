const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

const Post = require("./models/Post");
// Config
// Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.get("/", function (req, res) {
  Post.findAll({ order: [["id", "DESC"]] }).then(function (posts) {
    res.render("home", { posts: posts });
  });
});
app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Houve um erro: " + erro);
    });
});

app.get("/deletar/:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function () {
      res.send("Postagem deletada com sucesso!");
    })
    .catch(function (erro) {
      res.send("Esta postagem não existe! ");
    });
});

app.listen(3000, function () {
  console.log("Servidor Rodando na url http://localhost:3000");
});
