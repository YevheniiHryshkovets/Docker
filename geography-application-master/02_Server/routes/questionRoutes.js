const { Router } = require('express');
const Question = require('../models/questionModel');

const router = Router();

// TODO: Add controllers

const serverError = () => {
  console.log('Server not work!');
  res.status(500).send('Server not work!');
};

/*
 * TODO: Если REST то /questions пусть отдает и так все вопросы?
 */
// get a list of questions from the db
router.get('/', (req, res) => {
  Question.find()
    .then(questions => {
      console.log('Show all questions.');
      res.json(questions);
    })
    .catch(serverError);
});


// get a specific amount of questions from the db
router.get('/', (req, res) => {
  Question.find()
    .then(questions => {
      let questionAmount = req.query.amount;
      console.log('Show ' + questionAmount + ' questions.');
      let result = questions.slice(0, questionAmount);
      res.json(result);
    })
    .catch(serverError);
});

// get a single question from the db
router.get('/:id', (req, res) => {
  Question.findById({ _id: req.params.id }, req.body)
    .then(question => {
      console.log('Show one question');
      res.json(question);
    })
    .catch(serverError);
});

router.post('/', (req, res) => {
  console.log('Creae new question ' + req.body);
  Question.create(req.body)
    .then(question => {
      res.json(question);
    })
    .catch(serverError);
});

router.put('/:id', (req, res) => {
  Question.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Question.findOne({ _id: req.params.id }).then(question => {
        console.log('Updated question: ' + question.toString());
        res.json(question);
      });
    })
    .catch(serverError);
});

router.delete('/:id', (req, res) => {
  Question.findByIdAndRemove({ _id: req.params.id })
    .then(question => {
      console.log('Delete ' + question.toString());
      res.json(question);
    })
    .catch(serverError);
});

module.exports = router;
