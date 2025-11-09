import reduxImage from "../assets/projects/redux-data.jpeg";
import data from "../assets/projects/data.jpg"
import smart from "../assets/projects/smart.jpeg"
import propertyFraud from "../assets/projects/propertyFraud.png"
import burger from "../assets/projects/burger.jpg"
import registration from "../assets/projects/registration.jpg"
import electronics from "../assets/projects/electronics.jpg"
import logistics from "../assets/projects/logistics.jpg"
import calculator from "../assets/projects/calculator.jpg"
import personal from "../assets/projects/personal.jpg"

export const projectsData = [
  {
    id: "crudredux",
    key: "react",
    image: reduxImage,
    date: "26 Aug, 2025",
    title: "Teams of Players",
    skill: "React, TypeScript, Redux Toolkit Query",
    description:
      "A comprehensive web application architected with React, TypeScript, and Redux Toolkit Query (RTK Query), designed to empower users to efficiently manage teams and players through a robust, responsive interface with full CRUD operations via a RESTful API.",
    site: "https://github.com/ArturBaghdanyan/TeamsOfPlayers_app"
  },
  {
    id: "data-vue",
    key: "vue",
    image: data,
    date: "26 Feb, 2025",
    title: "Crud (Vue.js)",
    skill: "Vue.js, Vuex, REST API",
    description:
      "A full-featured web application built using Vue.js and Vuex, allowing users to manage teams and players with seamless CRUD functionality via REST API. Implemented Vuex to manage global state efficiently, keeping UI and data in sync.",
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
