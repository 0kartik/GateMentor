# 🎓 GateMentor
### Your Intelligent Study Partner for Competitive Exams

GateMentor is a clean, AI-powered web application designed to help students **understand** competitive exam concepts instead of memorizing answers.  
It explains topics in a structured, exam-oriented manner and generates practice questions instantly.

Built for GATE, DSA (LeetCode-style), and CS Theory preparation.

---

## 🚀 Features

- 📘 Structured Concept Explanations
  Clear, simple, and exam-focused explanations

- 📌 Real-World Examples & Analogies
  Makes complex topics easier to grasp

- ⚠️ Common Mistakes Highlighted
  Learn what examiners often trap students with

- 📝 Exam-Style Practice Questions
  With hidden answers for self-testing
  
- 🌙 Clean & Professional Dark UI  
  Minimal, distraction-free design

---

## 🧠 How It Works

1. Enter a topic or question  
2. Select the exam type (GATE / DSA / CS Theory)  
3. Click Explain Concept
4. Instantly receive a structured breakdown with a practice question

---

## 🛠️ Tech Stack

- Frontend: React  
- Styling: CSS (custom, no UI frameworks)  
- AI: OpenAI API  
- State Management: React Hooks  
- Storage: Browser localStorage (for history)

---

## 📂 Project Structure

src/
├─ components/
│   ├─ Header.jsx
│   ├─ InputBox.jsx
│   ├─ ResponseSection.jsx
│   ├─ HistoryPanel.jsx
├─ App.jsx
├─ index.css

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn

### Steps to Run Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/PrepPilot-AI.git
cd PrepPilot-AI
````

2. Install node modules (Required)

```bash
npm install
```

> ⚠️ This step is mandatory. The project will not run without installing `node_modules`.

3. Set up environment variables
   Create a `.env` file in the root directory and add:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the development server

```bash
npm run dev
```

5. Open in browser

```
http://localhost:5173
```

---

## 🧪 Demo Use Case

Input:

```
Explain Deadlock in Operating Systems
```

Output:

* Concept explanation
* Simple analogy
* Common mistakes
* GATE-style question with answer toggle

---

## 🎯 Hackathon Note

This project was built as a solo hackathon submission with a focus on:

* Clean UI/UX
* Practical student value
* Fast, structured learning

Designed to be easily extendable with:

* User accounts
* Progress tracking
* Exam-specific mock tests

---

## 📌 Future Improvements

* User authentication
* Topic-wise progress tracking
* PDF / notes export
* Voice-based explanations

---

## 👨‍💻 Author

Built by Kartikeya
Solo Developer | Hackathon Submission

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub — it motivates further improvements!
