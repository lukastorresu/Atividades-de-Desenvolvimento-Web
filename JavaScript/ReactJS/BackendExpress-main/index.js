// importando os pacotes para uso no arquivo index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Tasks = require('./modules/Tasks')

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/add', async (req, res) => {
    const { titulo, descricao, data, executada } = res.req.body
    const task = {
        titulo,
        descricao,
        data,
        executada
    }
    await Tasks.create(task)
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.get('/getAll', async (req, res) => {
    await Tasks.find()
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.get('/get/:type', async (req, res) => {
    const type = req.params.type
    let typeRequest;
    const dataHoje = new Date()
    dataHoje.setUTCHours(0, 0, 0, 0)
    switch (type) {
        case "hoje":
            typeRequest = {
                data: dataHoje,
                executada: false
            }
            break;
        case "atrasadas":
            typeRequest = {
                data: {
                    $lt: dataHoje,
                },
                executada: false
            }
            break;
        case "futuras":
            typeRequest = {
                data: {
                    $gt: dataHoje,
                },
                executada: false
            }
            break;
        case "executadas":
            typeRequest = {
                executada: true
            }
            break;
        default:
            return res.status(404).json({ "error": "Type not found" })
    }
    await Tasks.find(typeRequest).sort({ data: 'asc' })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})


app.get('/getOne/:titulo', async (req, res) => {
    const titulo = req.params.titulo
    await Tasks.findOne({ titulo })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.put('/update', async (req, res) => {
    const { titulo, descricao, data, executada, _id } = res.req.body

    await Tasks.updateOne({ _id: _id }, {
        $set: {
            ...(titulo != undefined && { titulo }),
            ...(descricao != undefined && { descricao }),
            ...(data != undefined && { data }),
            ...(executada != undefined && { executada })
        }
    })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await Tasks.deleteOne({ _id: id })
        .then((result) => {
            return res.status(201).json({ result })
        }).catch((err) => {
            return res.status(500).json({ error: err })
        })
})

mongoose.connect('mongodb+srv://admin:adminJoaoRafael@expresssecomp2022.o7wdbuy.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('conectado ao mongoose');
        app.listen(9000, () => console.log('Express started at http://localhost:9000'));
    }).catch((err) => {
        console.log('erro ao conectar no mongoose: ', err);
    })

// o servidor irá rodar dentro da porta 9000


