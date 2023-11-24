const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");
const path = require("path");

dotenv.config();

app.use(express.urlencoded({extended: true}));
require("./database/index");

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "views/"));

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, '/public')))

handlebars.create({
    partialsDir: path.join(__dirname, "views/partials")
});

app.use(postRoutes);

app.get('/home', (req, res) => {
    return res.render('home')
});

app.listen(4000, console.log("Servidor on na porta 4000"));