const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String,
    default: undefined,
  },
  answers: {
    type: [String],
    default: undefined,
  },
  answer: {
    type: Number,
    default: undefined,
  },
  weight: {
    type: Number,
    default: undefined,
  },
});

const Question = mongoose.model('questions', QuestionSchema);
module.exports = Question;
