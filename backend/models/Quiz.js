const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [{ text: String, isCorrect: Boolean }],
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
