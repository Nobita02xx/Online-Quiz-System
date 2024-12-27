import React from 'react';

const Quiz = () => {
  const questions = [
    {
      questionText: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correct: 1,
    },
  ];

  return (
    <div>
      {questions.map((q, idx) => (
        <div key={idx}>
          <h4>{q.questionText}</h4>
          {q.options.map((opt, optIdx) => (
            <button key={optIdx}>{opt}</button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
