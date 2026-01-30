# Items Modal Component – React + Vite

A professional, production-ready React modal component for selecting items from multiple categories (Fruits & Vegetables). Built using modern React patterns, Vite, and CSS Modules.



## 📋 Table of Contents

- [Approach](#-approach)  
- [Live Link](#-live-link)  
- [How to Run Locally](#-how-to-run-locally)  
- [AI/LLM Usage](#-aillm-usage)  



## 🧠 Approach

The project was developed by breaking the requirements into focused parts — modal UI, tab navigation, search functionality, item selection, and validation logic.

A clean component hierarchy was designed where the parent component (`ItemsModal`) manages all state, and child components remain modular and reusable.

### Key Decisions

- **Centralized state management** for clarity and easier debugging  
- **Set data structure** for fast O(1) selection lookups  
- **Debounced search (150ms)** to improve performance  
- **CSS Modules** for scoped, maintainable styling  
- **Immutable state updates** to follow React best practices  

The goal was to keep the architecture simple, scalable, and production-ready without adding unnecessary dependencies.



## 🌐 Live Link

**Live Link:**   
https://bot-gauge-assignment.vercel.app/



## 💻 How to Run Locally

### 1️⃣ Clone the repository

git clone `https://github.com/cretos20/BotGauge_assignment.git`

### 2️⃣ Navigate into the project

cd BotGauge_assignment

3️⃣ Install dependencies

npm install

4️⃣ Start development server

npm run dev

5️⃣ Open in browser

http://localhost:5173/



## 🤖 AI/LLM Usage

AI tools and online resources were used responsibly during development for assistance and learning purposes:

1. **CSS Styling** – Assisted using Claude.ai  
2. **Syntax References** – Verified using W3Schools and Claude.ai  
3. **README Documentation** – Structured with the help of GitHub Copilot  
4. **Error Resolution & Debugging** – Researched via StackOverflow, Copilot, and Claude.ai  





