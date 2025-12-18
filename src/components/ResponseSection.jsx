import { useState } from 'react';

function ResponseSection({ response }) {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!response) return null;

  const { explanation, example, mistakes, question, answer } = response;

  return (
    <section className="response-section">
      <div className="response-card">
        <h3 className="card-title">📘 Concept Explanation</h3>
        <p className="card-content">{explanation}</p>
      </div>

      <div className="response-card">
        <h3 className="card-title">📌 Simple Example or Analogy</h3>
        <p className="card-content">{example}</p>
      </div>

      <div className="response-card">
        <h3 className="card-title">⚠️ Common Mistakes Students Make</h3>
        <ul className="mistakes-list">
          {mistakes.map((mistake, index) => (
            <li key={index}>{mistake}</li>
          ))}
        </ul>
      </div>

      <div className="response-card">
        <h3 className="card-title">📝 Exam-Style Question</h3>
        <p className="card-content question-text">{question}</p>

        <button
          className="toggle-answer-button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        {showAnswer && (
          <div className="answer-section">
            <h4 className="answer-title">Answer:</h4>
            <p className="card-content">{answer}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResponseSection;
