import { useState, useRef } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ResponseSection from './components/ResponseSection';

function App() {
  const [examType, setExamType] = useState('GATE');
  const [concept, setConcept] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const responseRef = useRef(null);

  const parseAIResponse = (text) => {
    const sections = {
      explanation: '',
      example: '',
      mistakes: [],
      question: '',
      answer: ''
    };

    const lines = text.split('\n');
    let currentSection = null;
    let currentContent = [];

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.includes('📘 Concept Explanation:')) {
        currentSection = 'explanation';
        currentContent = [];
      } else if (trimmed.includes('📌 Simple Example') || trimmed.includes('📌 Example')) {
        if (currentSection === 'explanation') {
          sections.explanation = currentContent.join(' ').trim();
        }
        currentSection = 'example';
        currentContent = [];
      } else if (trimmed.includes('⚠️ Common Mistakes')) {
        if (currentSection === 'example') {
          sections.example = currentContent.join(' ').trim();
        }
        currentSection = 'mistakes';
        currentContent = [];
      } else if (trimmed.includes('📝 Exam-Style Question:')) {
        if (currentSection === 'mistakes') {
          sections.mistakes = currentContent
            .filter(c => c.trim())
            .map(c => c.replace(/^[-•*]\s*/, '').trim());
        }
        currentSection = 'question';
        currentContent = [];
      } else if (trimmed.includes('📝 Answer:')) {
        if (currentSection === 'question') {
          sections.question = currentContent.join(' ').trim();
        }
        currentSection = 'answer';
        currentContent = [];
      } else if (trimmed && !trimmed.match(/^[📘📌⚠️📝]/)) {
        currentContent.push(trimmed);
      }
    }

    if (currentSection === 'answer') {
      sections.answer = currentContent.join(' ').trim();
    }

    return sections;
  };

  const handleExplain = async () => {
    if (!concept.trim()) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!apiKey || apiKey === 'your_openai_api_key_here') {
        throw new Error('Please add your OpenAI API key to the .env file');
      }

      const systemPrompt = `You are an expert competitive exam mentor.

Explain concepts in a structured, simple, and exam-oriented manner.

Always follow this exact format:

📘 Concept Explanation:
(Simple, clear explanation)

📌 Simple Example or Analogy:
(Real-world or intuitive example)

⚠️ Common Mistakes Students Make:
(Bulleted list)

📝 Exam-Style Question:
(One relevant question)

📝 Answer:
(Hidden by default, revealed on button click)

Be concise, professional, and student-friendly.
Avoid unnecessary verbosity.`;

      const userPrompt = `Exam Type: ${examType}\nConcept/Question: ${concept}`;

      const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.7,
          max_tokens: 1500
        })
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error?.message || 'Failed to get response from OpenAI');
      }

      const data = await apiResponse.json();
      const aiText = data.choices[0].message.content;
      const parsedResponse = parseAIResponse(aiText);

      setResponse(parsedResponse);

      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header examType={examType} onExamTypeChange={setExamType} />

      <main className="main-content">
        <InputBox
          concept={concept}
          onConceptChange={setConcept}
          onExplain={handleExplain}
          isLoading={isLoading}
        />

        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Generating explanation...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p className="error-text">⚠️ {error}</p>
          </div>
        )}

        <div ref={responseRef}>
          <ResponseSection response={response} />
        </div>
      </main>
    </div>
  );
}

export default App;
