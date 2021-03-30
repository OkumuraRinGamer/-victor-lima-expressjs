// Carregando módulos
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/admin");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
//const mongoose = require('mongoose')
// Configurações
// Sessão
app.use(
  session({
    secret: "cursodenode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
// Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});
// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handlebars
app.engine("handlebars", handlebars({ defaulLayout: "main" }));
app.set("view engine", "handlebars");
// Mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/blogapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao mongo");
  })
  .catch((err) => {
    console.log("Erro ao se conectar: " + err);
  });
// Public
app.use(express.static(path.join(__dirname, "public")));
// Rotas
app.get("/", (req, res) => {
  res.send("Rota Principal");
});

app.get("/posts", (req, res) => {
  res.send("Lista Posts");
});

app.use("/admin", admin);
// Outros
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Sevidor rodando! ");
});
