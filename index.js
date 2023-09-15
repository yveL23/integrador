const express = require('express');
const exphbs = require('express-handlebars');
const PORT = 3333;
const { db, database } = require("./database/db.js");
//Importar o módulo conn para as operações com o banco
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    return res.redirect('/home')
});

app.get('/duvidas-frequentes', (req,res)=>{
    const viewSql = `SELECT * FROM tb_problens;`

    database.query(viewSql, (error,result)=>{
        if(error){
            console.error(error);
            return res.status(500).json({error: "Erro ao exibir"});
        }

        const duvida = result
        return res.render('home' ,{result})
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}🟢`)
})
