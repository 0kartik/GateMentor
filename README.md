<div align="center">

<h1>🎓 GateMentor</h1>
<h3>AI-Powered Study Partner for Competitive Exams</h3>

<p>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=for-the-badge&logo=openai&logoColor=white" />
</p>

<p>
  <a href="#-demo">Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-project-structure">Structure</a>
</p>

</div>

---

## 📖 Overview

**GateMentor** is a full-stack AI-powered web application that helps students preparing for competitive exams **understand concepts deeply** rather than memorize answers. Powered by OpenAI's GPT-4o-mini, it delivers structured, exam-focused explanations with real-world analogies, common pitfalls, and auto-generated practice questions — all within a clean, distraction-free dark UI.

> Built as a solo hackathon submission, GateMentor demonstrates end-to-end product thinking: from AI prompt engineering and response parsing to a polished, responsive UI.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI Concept Explanations** | Structured breakdowns tailored to the selected exam type |
| 📌 **Real-World Analogies** | Intuitive examples to simplify complex CS/engineering topics |
| ⚠️ **Common Mistake Detection** | Highlights typical traps examiners set for students |
| 📝 **Auto-Generated Practice Questions** | Exam-style MCQs/descriptive questions with toggle-reveal answers |
| 🎯 **Multi-Exam Support** | Supports GATE, DSA (LeetCode-style), and CS Theory modes |
| 🌙 **Professional Dark UI** | Minimal, eye-friendly design built for long study sessions |
| ⚡ **Instant Responses** | Fast API integration with smooth loading states and error handling |

---

## 🎬 Demo

### Input
```
Exam Type: GATE
Concept: Explain Deadlock in Operating Systems
```

### Output
The application returns a structured response with four sections:

- **📘 Concept Explanation** — Clear, exam-oriented definition
- **📌 Analogy** — e.g., *"Two people trying to pass through a narrow corridor simultaneously"*
- **⚠️ Common Mistakes** — Bulleted list of pitfalls (e.g., confusing deadlock with starvation)
- **📝 Exam Question + Hidden Answer** — A GATE-style question with a reveal toggle

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI with hooks for state management |
| **TypeScript** | Type safety across the codebase |
| **Vite 5** | Lightning-fast dev server and optimized production builds |
| **Tailwind CSS 3** | Utility-first responsive styling |
| **Custom CSS** | Dark theme, animations (`fadeIn`, `slideDown`, `spin`), and card hover effects |

### AI & Backend
| Technology | Purpose |
|---|---|
| **OpenAI GPT-4o-mini** | Core AI engine for concept generation |
| **OpenAI Chat Completions API** | REST API integration with system + user prompt chaining |
| **Custom Prompt Engineering** | Structured prompt templates to enforce consistent output format |
| **Response Parser** | Custom `parseAIResponse()` function to extract structured sections |

### Tooling & DX
| Technology | Purpose |
|---|---|
| **ESLint + TypeScript-ESLint** | Code quality and linting |
| **PostCSS + Autoprefixer** | CSS processing and browser compatibility |
| **Vite Environment Variables** | Secure API key management via `.env` |

---

## 📂 Project Structure

```
gatementor/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Exam type selector + app branding
│   │   ├── InputBox.jsx        # Concept input + submit control
│   │   └── ResponseSection.jsx # AI response renderer with answer toggle
│   ├── App.jsx                 # Root component: state, API call, response parsing
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles, dark theme, animations
├── index.html                  # App shell with SEO meta tags
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.app.json           # TypeScript compiler options
└── .env                        # API key (not committed)
```

---

## 🏗️ Architecture

```
User Input
    │
    ▼
[InputBox Component]
    │  topic + exam type
    ▼
[App.jsx — handleExplain()]
    │
    ├── Builds system prompt (structured format instructions)
    ├── Builds user prompt (exam type + concept)
    │
    ▼
[OpenAI API — GPT-4o-mini]
    │  raw text response
    ▼
[parseAIResponse()]
    │  extracts: explanation, example,
    │  mistakes[], question, answer
    ▼
[ResponseSection Component]
    │
    ├── 📘 Concept Card
    ├── 📌 Example Card
    ├── ⚠️ Mistakes Card
    └── 📝 Question Card (with answer toggle)
```

### Key Engineering Decisions

**1. Prompt Engineering for Structured Output**
Rather than rendering raw AI text, GateMentor uses a strict system prompt that enforces a specific emoji-demarcated section format. This allows the custom parser to reliably extract each section into typed fields.

**2. Custom Response Parser**
`parseAIResponse()` uses a stateful line-by-line parser to identify section boundaries and accumulate content — more robust than regex-only approaches for multi-line AI output.

**3. Component Separation of Concerns**
UI (Header, InputBox, ResponseSection) is fully decoupled from business logic (API calls, parsing) which lives entirely in `App.jsx`, keeping components pure and reusable.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- An [OpenAI API key](https://platform.openai.com/api-keys)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/gatementor.git
cd gatementor

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and add your OpenAI key:
# VITE_OPENAI_API_KEY=sk-...

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Run TypeScript type checking |

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> ⚠️ **Security Note:** Never commit your `.env` file. It is already listed in `.gitignore`. The `VITE_` prefix exposes variables to the browser — for production, proxy API calls through a backend server to keep keys private.

---

## 🎨 UI Design Highlights

- **Color Palette:** Deep navy (`#0F172A`) background, indigo (`#6366F1`) accent, cyan (`#22D3EE`) headings
- **Typography:** System font stack for performance; carefully tuned `line-height: 1.8` for readability
- **Animations:** CSS `fadeIn` on response render, `slideDown` for answer reveal, spinner for loading state
- **Responsiveness:** Fully mobile-friendly with Flexbox layout and `768px` breakpoint overrides

---

## 🔭 Roadmap

- [ ] **User Authentication** — Save and track personal study history
- [ ] **Topic Progress Tracking** — Visual progress dashboard by subject/chapter
- [ ] **PDF Export** — Download explanations as formatted notes
- [ ] **Voice Explanations** — Text-to-speech for audio learners
- [ ] **Mock Test Mode** — Timed, multi-question practice sessions
- [ ] **Backend API Proxy** — Secure server-side key management

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

```bash
# Fork → Branch → Commit → Pull Request
git checkout -b feature/your-feature-name
```
---

## 👨‍💻 Author

**Kartikeya**
Solo Developer · Hackathon Submission

<p>
  <a href="https://github.com/your-username">
    <img src="https://img.shields.io/badge/GitHub-your--username-181717?style=flat-square&logo=github" />
  </a>
  <a href="https://linkedin.com/in/your-profile">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin" />
  </a>
</p>

---

<div align="center">
  <p>If this project helped you, consider giving it a ⭐ — it motivates further development!</p>
  <sub>Built with ❤️ for students, by a student.</sub>
</div>
