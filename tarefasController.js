const tarefas = require("../model/tarefas.json")

exports.get = (req,res) =>{
    res.status(200).send(tarefas)
}

