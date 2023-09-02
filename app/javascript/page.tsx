"use client"

import React, { useState } from 'react';

const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: [
      { text: "Java", id: "a" },
      { text: "C", id: "b" },
      { text: "Python", id: "c" },
      { text: "JavaScript", id: "d" },
    ],
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    options: [
      { text: "Central Style Sheets", id: "a" },
      { text: "Cascading Style Sheets", id: "b" },
      { text: "Cascading Simple Sheets", id: "c" },
      { text: "Cars SUVs Sailboats", id: "d" },
    ],
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    options: [
      { text: "Hypertext Markup Language", id: "a" },
      { text: "Hypertext Markdown Language", id: "b" },
      { text: "Hyperloop Machine Language", id: "c" },
      { text: "Helicopters Terminals Motorboats Lamborghinis", id: "d" },
    ],
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    options: [
      { text: "1996", id: "a" },
      { text: "1995", id: "b" },
      { text: "1994", id: "c" },
      { text: "none of the above", id: "d" },
    ],
    correct: "b",
  },
];

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswerClick = (optionId:any) => {
    setSelected(optionId);
  };

  const handleNextQuestion = () => {
    if (selected === quizData[currentQuiz].correct) {
      setScore(score + 1);
    }
    setSelected(null);
    setCurrentQuiz(currentQuiz + 1);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setSelected(null);
  };

  return (
    <div className="App">
      {currentQuiz < quizData.length ? (
        <div>
          <h2>Question {currentQuiz + 1}</h2>
          <p>{quizData[currentQuiz].question}</p>
          <ul>
            {quizData[currentQuiz].options.map((option) => (
              <li key={option.id}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option.id}
                    checked={selected === option.id}
                    onChange={() => handleAnswerClick(option.id)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>You answered {score}/{quizData.length} questions correctly</h2>
          <button onClick={resetQuiz}>Reload</button>
        </div>
      )}
    </div>
  );
}

export default App;