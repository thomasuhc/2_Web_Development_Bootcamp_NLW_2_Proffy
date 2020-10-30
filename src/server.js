const express = require('express');
const server = express();
const nunjucks = require('nunjucks')


function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]

}

function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {

    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {

    const data = req.query

    console.log(data);

    const isNotEmpty = Object.keys(data).length > 0;
    
    if (isNotEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data)

        return res.redirect("/study")
        
    }

    return res.render("give-classes.html", {subjects, weekdays})
}


nunjucks.configure('src/views', { 
    express: server,
    noCache: true,
});


server

.use(express.static("public"))

.get('/', pageLanding)

.get('/study', pageStudy)

.get('/give-classes', pageGiveClasses)

.listen(3000)


const proffys = [
    {
        name: "Gregorio Benatti",
        avatar: "https://avatars3.githubusercontent.com/u/820778?s=460&u=cc1de2d2e05d5921ee21b61e66895e39eed50e88&v=4",
        whatsapp: "6856754646",
        bio: "Bacharel em Química pela UFMG. pós graduação em Ensino de Química pelo IBE, em curso. Mestardo em Química Analítica pela UFMG, em curso. Experiência de 12 anos em ensino particular de Química, Matemática. e Cálculos.",
        subject: "Quimica",
        cost: "60",
        weekday: [0],
        time_from: [563],
        time_to: [543]
    },
    {
        name: "Angela Yu",
        avatar: "https://avatars0.githubusercontent.com/u/8798027?s=460&u=9dfe78c98a6fdf4d5814f1ebf1ee5c19bd7277a9&v=4",
        whatsapp: "7898757675",
        bio: "Sou engenheira civil, graduada pela Escola Politécnica da USP e, durante muitos anos, ministrei aulas particulares destas disciplinas paralelamente à minha atividade como engenheira.Devido ao imenso prazer em lecionar, que adquiri desde a adolescência, continuei a atividade mesmo atuando como engenheira.",
        subject: "Matematica",
        cost: "100",
        weekday: [1],
        time_from: [43],
        time_to: [647]
    }
]


const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educacao fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terca-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]