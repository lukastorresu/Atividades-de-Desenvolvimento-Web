const mongoose = require('mongoose')

const Tasks = mongoose.model('Task', {
    titulo: String,
    descricao: String,
    data: Date,
    executada: Boolean
})

module.exports = Tasks