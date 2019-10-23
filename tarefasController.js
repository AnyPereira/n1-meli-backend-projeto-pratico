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

exports.getNome = (req,res) => {
    const id = req.params.id
    const colaboradorUnico = tarefas.find(tarefa => tarefa.id == id) 
    const fez = tarefas.map( tarefa => tarefa.nomeColaborador)
    res.status(200).send(fez)   
}





