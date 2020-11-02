const Database = require("./db")
const createProffy = require("./createProffy")


Database.then(async (db) => {

    proffyValue = {
        name: "Angela Yu",
        avatar: "https://avatars0.githubusercontent.com/u/8798027?s=460&u=9dfe78c98a6fdf4d5814f1ebf1ee5c19bd7277a9&v=4",
        whatsapp: "7898757675",
        bio: "Sou engenheira civil, graduada pela Escola Politécnica da USP e, durante muitos anos, ministrei aulas particulares destas disciplinas paralelamente à minha atividade como engenheira.Devido ao imenso prazer em lecionar, que adquiri desde a adolescência, continuei a atividade mesmo atuando como engenheira."
    }

    classValue = {
        subject: 1,
        cost: "100"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, { proffyValue, classValue, classScheduleValues})






    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)



    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)




    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})