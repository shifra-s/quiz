mongoose = require('mongoose')
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    qTitle: String,
    answers: []
})

module.exports = mongoose.model('Quiz',QuizSchema);