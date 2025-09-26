export function filteredQuestions(questions, clickedCategory) {
  const filteredQuestions =
    clickedCategory === "all"
      ? questions
      : questions.filter((question) => question.category === clickedCategory);

  return filteredQuestions;
}

export function questionsFrequency(questions, clickedCategory, type) {
  const questionsFreq = filteredQuestions(questions, clickedCategory).reduce(
    (acc, cur) => {
      const category = cur[type];
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {}
  );

  return questionsFreq;
}
