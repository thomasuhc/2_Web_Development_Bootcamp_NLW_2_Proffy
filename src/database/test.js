const Database = require("./db")

const createProffy = require("./createProffy")

Database.then( async (db) => {

    proffyValue = {
        name: "Angela Yu",
        avatar: "https://avatars0.githubusercontent.com/u/8798027?s=460&u=9dfe78c98a6fdf4d5814f1ebf1ee5c19bd7277a9&v=4",
        whatsapp: "8787646453",
        bio: "Sou engenheira civil, graduada pela Escola Politécnica da USP e, durante muitos anos, ministrei aulas particulares destas disciplinas paralelamente à minha atividade como engenheira.Devido ao imenso prazer em lecionar, que adquiri desde a adolescência, continuei a atividade mesmo atuando como engenheira.",
    }

    classValue = {
        subject: "Matematica",
        cost: "100",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 420,
            time_to: 1800
        },
        {
            weekday: 0,
            time_from: 600,
            time_to: 900
        }
    ]

    //await createProffy(db, { proffyValue, classValue, classScheduleValues})
})