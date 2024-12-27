import React from 'react';
import Quiz from '../components/Quiz';
import Timer from '../components/Timer';

const QuizPage = () => {
  const handleComplete = () => {
    console.log('Time is up!');
  };

  return (
    <div className="container">
      <h2>Quiz Page</h2>
      <Timer duration={60} onComplete={handleComplete} />
      <Quiz />
    </div>
  );
};

export default QuizPage;
