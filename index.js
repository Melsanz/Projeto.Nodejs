const express = require('express')
const app = express()

const { Sequelize, DataTypes } = require('sequelize')
const task = require('./models/task')
const TaskModels = require('./models/task')
const sequelize = new Sequelize({
     dialect: 'sqlite', 
     storage: './banco.db' })
const Tasks = TaskModels (sequelize, DataTypes)
app.use(express.json())



//LISTAR TAREFAS//
app.get('/tarefas', async (req, res) => {
  const allTasks = await Tasks.findAll()
  res.json({ allTasks })
})

//PROCURAR DE TAREFAS
app.get('/tarefa/:id', async (req,res) =>{
    const taskId  = req.params.id
    const task = await Tasks.findByPk(taskId)
    console.log(req)

    res.json({task})
})

//CRIAR NOVA TAREFA
app.post('/novatarefa/:id', async (req,res) =>{
    const body = req.body
    const task = await Tasks.create({description: body.description, done: body.done})
    res.json(task)
})

//ATUALIZAR TAREFA
app.put('/atualizartarefa/:id', async(req,res) =>{
    const body = req.body
    const taskId = req.params.id
    const task = await Tasks.findByPk(taskId)
    const result = await task.update({description: body.description, done: body.done})
    res.send(result)
})

//DELETAR TAREFA
app.delete('/deletartarefa/:id', async(req,res) =>{
    const taskId = req.params.id
    const task = await Tasks.destroy({ where: {id: taskId}})
    res.send('tarefa deletada')
})


app.listen(8080,() => {
  console.log('servidor funcionando. Acesse localhost:8080')
})