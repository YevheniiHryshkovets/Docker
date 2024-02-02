const getCorrectAnswers = questions => questions.map(({ answer }) => answer);

export const getSteps = questions =>
  questions.map(({ id, question }) => ({ id, question }));

export const getStepContent = (questions, stepIndex) =>
  questions[stepIndex].answers;

export const countScore = (questions, selectedAnswers) => {
  const allCorrectAnswers = getCorrectAnswers(questions);

  const answeredCorrectly = allCorrectAnswers.reduce(
    (total, answer, idx) =>
      answer === selectedAnswers[idx] ? total + 1 : total,
    0,
  );

  return {
    total: allCorrectAnswers.length,
    correct: answeredCorrectly,
    passed: answeredCorrectly === allCorrectAnswers.length,
  };
};
