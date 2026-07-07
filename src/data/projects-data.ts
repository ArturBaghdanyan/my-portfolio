import JobBoard from "../assets/JobBoard.png";

export const projectsData = [
  {
    id: "job-board",
    key: "react",
    image: JobBoard,
    date: "10 Jan, 2026",
    title: "Job Board Platform",
    skill:
      "React, TypeScript, RTK Query, React Router, Unit test, Vitest, React Testing Library",
    description:
      "A full-featured Job Board platform built with React and TypeScript. The application allows users to browse job listings, view detailed job descriptions, save jobs, and apply for positions. Authentication-based access ensures personalized user experience and secure data handling.",
    features: "Key Features",
    textList: [
      { text: "Browse and search job listings with dynamic filtering" },
      { text: "Job details pages with full descriptions and requirements" },
      { text: "Save and apply to jobs with authenticated user access" },
      { text: "State management using RTK Query" },
      { text: "Protected routes and auth guards with React Router" },
      { text: "Reusable components and scalable project architecture" },
      { text: "Responsive UI optimized for mobile and desktop" },
      {
        text: "Robust code quality with Vitest and unit testing for critical business logic",
      },
      {
        text: "Ensured application reliability and stability through comprehensive test coverage",
      },
    ],
    site: "https://your-dream-job.netlify.app",
    link: "https://github.com/ArturBaghdanyan/JobBoard",
  },
  {
    id: "nexus-ai",
    key: "next",
    image: JobBoard,
    date: "07 July, 2026",
    title: "Nexus AI",
    skill: "Next.js, TypeScript, Tailwind CSS, next-intl, Groq (LLM API)",
    description:
      "A full-stack AI-powered code review platform. Users can paste a GitHub repository link or submit code snippets directly, and the app analyzes them with AI to surface potential bugs, performance issues, and code quality concerns — making code review faster and easier for developers.",
    features: "Key Features",
    textList: [
      {
        text: "AI-driven code analysis to detect bugs, performance issues, and quality concerns",
      },
      {
        text: "Accepts GitHub repository links or direct code snippets for review",
      },
      {
        text: "Multilingual interface built with Next.js App Router and next-intl",
      },
      {
        text: "Decoupled architecture — Next.js frontend and GROQ API",
      },
      {
        text: "Integrates with an LLM API (Groq) to generate AI-powered code reviews",
      },
      {
        text: "Responsive, clean UI for reviewing analysis results",
      },
    ],
    site: "https://nexus-ai-review.netlify.app",
    link: "https://github.com/ArturBaghdanyan/Nexus-AI",
  },
  {
    id: "authors",
    key: "next",
    date: "Dec, 2025",
    title: "The authors with their books",
    skill:
      "HTML, CSS, JavaScript, React JS, Node JS, Express JS, Postgres, REST API",
    description:
      "A full-stack web application for managing authors and their books. Built with a React frontend, Node.js/Express REST API backend, and a PostgreSQL database — covering the complete development lifecycle from UI to data persistence.",
    features: "Key Features",
    textList: [
      { text: "Browse and search authors alongside their published books" },
      {
        text: "Full CRUD operations — create, read, update, and delete authors and books",
      },
      {
        text: "RESTful API built with Express JS for clean, structured data communication",
      },
      {
        text: "PostgreSQL database with relational data modeling between authors and books",
      },
      {
        text: "Responsive UI built with React for a smooth experience on any device",
      },
    ],
    link: "https://github.com/ArturBaghdanyan/AuthorsWithBooks_app",
  },
  {
    id: "Quizz",
    key: "react",
    date: "30 Apr, 2026",
    title: "Quizz App",
    skill: "Next.js, TypeScript, fake API",
    description:
      "A modern and interactive Quiz Application built with Next.js and TypeScript. This app allows users to test their knowledge through multiple-choice questions, track their score, and get instant feedback on their answers — all with a clean and responsive UI.",
    features: "Key Features",
    textList: [
      {
        text: "Dynamic multiple-choice questions with real-time score tracking",
      },
      {
        text: "Instant answer validation with visual feedback",
      },
      {
        text: "Fully typed components and data models using TypeScript",
      },
      {
        text: "Reusable UI components and modular structure",
      },

      {
        text: "Responsive design for mobile and desktop",
      },
    ],
    site: "https://quizzforstudents.netlify.app/",
    link: "https://github.com/ArturBaghdanyan/Quizz-app",
  },

  {
    id: "data-vue",
    key: "vue",
    date: "26 Feb, 2025",
    title: "CRUD Application (Vue.js)",
    skill: "Vue.js, Vuex, REST API",
    description:
      "A CRUD-based web application built with Vue.js, utilizing Vuex for centralized state management and RESTful API integration. The application allows users to manage teams and players through a structured interface while maintaining predictable data flow and UI consistency.",
    features: "Key Features",
    textList: [
      {
        text: "Full CRUD operations (Create, Read, Update, Delete) for teams and players",
      },
      {
        text: "Centralized global state management using Vuex",
      },
      {
        text: "RESTful API integration with asynchronous data handling",
      },
      {
        text: "Reusable Vue components with clean and scalable architecture",
      },
      {
        text: "Form validation and user-friendly error handling",
      },
      {
        text: "Reactive UI updates using Vue reactivity system",
      },
      {
        text: "Responsive design for desktop and mobile devices",
      },
    ],
    site: "https://crudvuex.netlify.app",
    link: "https://github.com/ArturBaghdanyan/Crud_Vuex",
  },
];
