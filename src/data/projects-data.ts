import reduxImage from "../assets/projects/redux-data.jpeg";
import data from "../assets/projects/data.jpg";
import smart from "../assets/projects/smart.jpeg";
import propertyFraud from "../assets/projects/propertyFraud.png";
import burger from "../assets/projects/burger.jpg";
import registration from "../assets/projects/registration.jpg";
import electronics from "../assets/projects/electronics.jpg";
import logistics from "../assets/projects/logistics.jpg";
import calculator from "../assets/projects/calculator.jpg";
import personal from "../assets/projects/personal.jpg";

export const projectsData = [
  {
    id: "Quizz",
    key: "react",
    image: reduxImage,
    date: "26 Sep, 2025",
    title: "Quizz App",
    skill: "React, TypeScript, fake API",
    description:
      "A modern and interactive Quiz Application built with React.js and TypeScript. This app allows users to test their knowledge through multiple-choice questions, track their score, and get instant feedback on their answers — all with a clean and responsive UI.",
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
    site: "https://smart-quizapp.netlify.app/",
    link: "https://github.com/ArturBaghdanyan/Quizz-app",
  },
  {
    id: "crudredux",
    key: "react",
    image: reduxImage,
    date: "26 Aug, 2025",
    title: "Teams of Players",
    skill: "React, TypeScript, Redux Toolkit Query (RTK Query)",
    description:
      "A CRUD-based web application built with React and TypeScript, utilizing Redux Toolkit Query for efficient server state management. The app enables users to manage teams and players through a responsive interface with full integration of RESTful API operations.",
    features: "Key Features",
    textList: [
      {
        text: "Full CRUD operations (Create, Read, Update, Delete) for teams and players",
      },
      {
        text: "Server state management using Redux Toolkit Query (RTK Query)",
      },
      {
        text: "RESTful API integration with automatic caching and data revalidation",
      },
      {
        text: "Strongly typed components and API responses using TypeScript",
      },
      {
        text: "Reusable and modular UI components with clean architecture",
      },
      {
        text: "Loading and error handling states for improved user experience",
      },
      {
        text: "Responsive design optimized for desktop and mobile devices",
      },
    ],
    link: "https://github.com/ArturBaghdanyan/TeamsOfPlayers_app",
  },

  {
    id: "data-vue",
    key: "vue",
    image: data,
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
  {
    id: "smart-shippings",
    key: "design",
    image: smart,
    date: "24 Jan, 2024",
    title: "Smart Shippings",
    skill: "HTML, CSS, Bootstrap, Swiper.js, JavaScript, jQuery",
    description:
      "Developed a modern and interactive web application using HTML, CSS, Bootstrap, Swiper.js, JavaScript, and jQuery. The project consists of multiple pages, all linked, ensuring smooth navigation between them.",
    features: "Key Features",
    textList: [
      { text: "Multi-page website with structured navigation" },
      { text: "Responsive layout built with Bootstrap grid system" },
      { text: "Interactive sliders implemented using Swiper.js" },
      { text: "DOM manipulation and UI interactions with jQuery" },
      { text: "Cross-browser compatible and mobile-friendly design" },
    ],
    site: "https://iridescent-puffpuff-812571.netlify.app/",
    link: "https://github.com/ArturBaghdanyan/Smart-Shippings",
  },
  {
    id: "property-app",
    key: "react",
    image: propertyFraud,
    date: "17 March, 2023",
    title: "Property",
    skill: "React, TypeScript, Tailwind CSS",
    description:
      "Collaborated with a team of developers to create a property-fraud application using React with TypeScript and Tailwind CSS.Implemented responsive design principles to ensure the application adapts seamlessly across various devices and screen sizes.",
    features: "Key Features",
    textList: [
      { text: "Team-based development using React and TypeScript" },
      { text: "Reusable UI components styled with Tailwind CSS" },
      { text: "Responsive layouts for multiple screen sizes" },
      { text: "Component-driven architecture and clean code practices" },
      { text: "Collaboration using Git and version control workflows" },
    ],

    link: "https://github.com/ArturBaghdanyan/property_fraud",
  },
  {
    id: "burger-king",
    key: "react",
    image: burger,
    date: "30 Nov, 2024",
    title: "Burger King",
    skill: "Next.js, TypeScript, CSS",
    description:
      "Created a dynamic and responsive web application built using Next.js, showcasing a collection of burgers with detailed descriptions.Utilized static generation (getStaticProps, getStaticPaths) for optimized performance and SEO.Integrated dynamic routing to display detailed information about each burger.",
    features: "Key Features",
    textList: [
      {
        text: "Static site generation using getStaticProps and getStaticPaths",
      },
      { text: "Dynamic routing for individual burger detail pages" },
      { text: "Optimized performance and SEO with Next.js" },
      { text: "Type-safe components using TypeScript" },
      { text: "Responsive UI design for mobile and desktop" },
    ],

    link: "https://github.com/ArturBaghdanyan/BurgerKing",
  },
  {
    id: "registration-task",
    key: "design",
    image: registration,
    date: "27 March, 2024",
    title: "Registration task",
    skill: "HTML, CSS, JavaScript, Bootstrap",
    description:
      "Created a dynamic and responsive registration form using HTML, CSS, JavaScript, and Bootstrap.Includes client-side validation using JavaScript to ensure data integrity and user feedback.",
    features: "Key Features",
    textList: [
      { text: "Client-side form validation using JavaScript" },
      { text: "Real-time user feedback for invalid input fields" },
      { text: "Responsive form layout using Bootstrap" },
      { text: "Reusable input components and clean markup structure" },
      { text: "Improved user experience through accessible form design" },
    ],

    site: "https://sparkling-marshmallow-cfe99a.netlify.app/",
    link: "https://github.com/ArturBaghdanyan/registration_task",
  },
  {
    id: "app-electronics",
    key: "react",
    image: electronics,
    date: "29 Oct, 2024",
    title: "App Electronics",
    skill: "React, TypeScript, CSS",
    description:
      "This React project implements a product listing page with the following key features.The FetchData component fetches product data from an API using useEffect and useCallback hooks.Users can filter products by category, brand, price range, rating, and a search term.",
    features: "Key Features",
    textList: [
      { text: "API-based product data fetching" },
      { text: "Advanced filtering by category, brand, price, and rating" },
      { text: "Search functionality with real-time updates" },
      { text: "Efficient state management using React hooks" },
      { text: "Responsive product listing UI" },
    ],
    link: "https://github.com/ArturBaghdanyan/skillex_task",
  },
  {
    id: "garant",
    key: "design",
    image: logistics,
    date: "25 March, 2024",
    title: "Garant",
    skill: "HTML, CSS, SCSS, JavaScript",
    description:
      "Collaborating closely with UI/UX designers, I've brought their vision to life by creating a responsive web design using HTML, CSS, SCSS, and JavaScript.Fully optimized for smaller screens, ensuring a seamless browsing experience across devices.",
    features: "Key Features",
    textList: [
      { text: "Pixel-perfect implementation from UI/UX designs" },
      { text: "Responsive layouts using CSS and SCSS" },
      { text: "Cross-device compatibility and mobile optimization" },
      { text: "Clean and maintainable stylesheet structure" },
      { text: "Performance-optimized static website" },
    ],

    link: "https://github.com/ArturBaghdanyan/garant_logistics",
  },
  {
    id: "calculator",
    key: "JS",
    image: calculator,
    date: "25 Jan, 2025",
    title: "Calculator",
    skill: "HTML, CSS, JavaScript",
    description:
      "A fully functional calculator built using HTML, CSS, and JavaScript, designed with a clean and intuitive interface.Adapts to various screen sizes and devices.Provides a smooth and intuitive user experience",
    site: "https://resonant-pastelito-bcd33d.netlify.app",
    link: "https://github.com/ArturBaghdanyan/calculator",
  },
  {
    id: "personal",
    key: "design",
    image: personal,
    date: "13 Nov, 2024",
    title: "Personal Website",
    skill: "HTML, CSS, JavaScript",
    description:
      "Developed a fully responsive personal website from scratch using HTML, CSS, SCSS, and JavaScript, showcasing my portfolio, projects, and professional profile. Optimized for performance, accessibility, and responsiveness, ensuring the site is visually appealing and highly functional.",
    link: "https://github.com/ArturBaghdanyan/personal_website",
  },
];
