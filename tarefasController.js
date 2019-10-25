const tarefas = require("../model/tarefas.json")

exports.get = (req,res) =>{
    res.status(200).send(tarefas)
}

exports.getById = (req,res) =>{
    const id = req.params.id

    tarefasId = tarefas.find(tarefas => tarefas.id == id)
    if(!tarefasId){
        res.send("Tarefa não encontrada!")
    }
    res.send(tarefasId)
}

exports.getColaborador = (req, res) => {    
    const nomeConcluiu = tarefas.filter(tarefa => tarefa.concluido == "true")    
    res.status(200).send(nomeConcluiu)
}

exports.getNomeId = (req, res) => {
    const id = req.params.id
    const nomeId = tarefas.find(item => item.id == id)
    const nomeFunc = nomeId.nomeColaborador 
    res.status(200).send(nomeFunc)   
}    
     






