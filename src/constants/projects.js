const projects = [
  {
    title: "Tours & Travel App",
    status: "Complete",
    category: "Full-Stack",
    description: "Full Stack MERN Travel application...",
    details:
      "This project is a Full Stack MERN travel booking application. Packages like axios for requesting data from backend, react-toastify for notifying purposes, joi for validation, bcrypt for hashing password, jwt for token authorization and stripe for payment have been used in this project. A user can register, login, browse through the tour offers available, book a tour and pay for it using a fake card provided by stripe. Moreover, a client can login and check their booking history in their account section and can also update their password if needed. Overall, this is a complete travel booking built as a hobby.",
    image: "/images/tours&travel/3.png",
    subImgs: [
      {
        img: "/images/tours&travel/1.png",
      },
      {
        img: "/images/tours&travel/2.png",
      },
      {
        img: "/images/tours&travel/full.png",
      },
    ],
    start: "03.02.2023",
    end: "05.03.2023",
    tags: ["MERN", "Mongo", "Express", "Node", "FULL-STACK"],
    source: "https://github.com/pariweshtamr/tours-travel-frontend",
    visit: "https://toursntravel.vercel.app/",
    id: "0",
  },
  {
    title: "E-Commerce",
    status: "Complete",
    category: "Full-Stack",
    description: "Full Stack MERN E-commerce application...",
    details:
      "This project is a Full Stack MERN E-commerce application. Packages like axios for requesting data from backend, react-toastify for notifying purposes, joi for validation, bcrypt for hashing password, jwt for token authorization and stripe for payment have been used in this project. A user can register, login, browse through the store catalog, add to cart and purchase items using a fake card provided by stripe. Moreover, a client can login and check their order history in their account section and can also update  their password if needed. Overall, this is a complete e-commerce store built for learning purposes.",
    image: "/images/soccer-store/1.jpg",
    subImgs: [
      {
        img: "/images/soccer-store/5.png",
      },
      {
        img: "/images/soccer-store/2.png",
      },
      {
        img: "/images/soccer-store/full.png",
      },
    ],
    start: "01.08.2021",
    end: "03.01.2022",
    tags: ["MERN", "Mongo", "Express", "Node", "FULL-STACK"],
    source: "https://github.com/pariweshtamr/mern-soccer-store-frontend",
    visit: "https://mern-soccer-store.vercel.app/",
    id: "1",
  },
  {
    title: "Library Management App",
    status: "Complete",
    category: "Full-Stack",
    description: "Full Stack MERN Library Management Application...",
    details:
      "This project is a Full Stack MERN Library Management Application where you can borrow and return books. You can select one of two user roles when registering. Depending on your role you can, if a user is a 'teacher', the user can add or delete books and view every transactions occured when borrowing and returning books from the library. If a user is a 'Student', the features are limited to borrowing, returning books and updating their info or password.",
    image: "/images/library-mgmt/4.png",
    subImgs: [
      {
        img: "/images/library-mgmt/1.png",
      },
      {
        img: "/images/library-mgmt/3.png",
      },
      {
        img: "/images/library-mgmt/2.png",
      },
    ],
    start: "14.01.2023",
    end: "30.01.2023",
    tags: ["MERN", "Mongo", "Express", "Node", "FULL-STACK"],
    source: "https://github.com/pariweshtamr/mern-library-app-frontend",
    visit: "",
    id: "2",
  },
  {
    title: "Expenses Tracker App",
    status: "Complete",
    category: "Full-Stack",
    description: "Full Stack MERN Expenses Tracker Application...",
    details:
      "This project is a Full Stack MERN Expenses Tracker Application. After registering and logging in, a user can start recording their income or expense and the amount along with a short name or description related to the transaction. All the transactions are listed in the table below the form.",
    image: "/images/expenses/13.png",
    subImgs: [
      {
        img: "/images/expenses/1.png",
      },
      {
        img: "/images/expenses/2.png",
      },
      {
        img: "/images/expenses/3.png",
      },
    ],
    start: "29.12.2022",
    end: "10.01.2023",
    tags: ["MERN", "Mongo", "Express", "Node", "FULL-STACK"],
    source: "https://github.com/pariweshtamr/expenses-tracker-client",
    visit: "",
    id: "3",
  },
  {
    title: "Beat Maker",
    status: "Complete",
    category: "JAVASCRIPT",
    description:
      "A beat-maker app where a user can create beautiful and catchy beats...",
    details:
      "This is a beat-maker app where a user can create beautiful and catchy beats. Users can mute specific sounds and increase or decrease the tempo (speed) of the sounds as well.",
    image: "/images/beatmaker/7.png",
    subImgs: [
      {
        img: "/images/beatmaker/1.png",
      },
      {
        img: "/images/beatmaker/2.png",
      },
    ],
    start: "28.09.2021",
    end: "29.09.2021",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    source: "https://github.com/pariweshtamr/js-beatMaker.git",
    visit: "https://pariweshtamr.github.io/js-beatMaker/",
    id: "3",
  },

  {
    title: "Portfolio",
    status: "Complete",
    category: "REACT JS",
    description: "Portfolio website...",
    details:
      "Using React, this is one of my portfolio websites where I have made use of a few react hooks...",
    image: "/images/old-portfolio/6.png",
    subImgs: [
      {
        img: "/images/old-portfolio/1.png",
      },
      {
        img: "/images/old-portfolio/6.png",
      },
      {
        img: "/images/old-portfolio/3.png",
      },
    ],
    start: "20.07.2022",
    end: "25.07.2022",
    tags: ["REACT JS"],
    source: "https://github.com/pariweshtamr/react-portfolio-website",
    visit: "https://my-portfolio-pariweshtamr.vercel.app/",
    id: "4",
  },
  {
    title: "Amazon-Prime Clone App",
    status: "Complete",
    category: "REACT JS",
    description:
      "Amazon-prime clone app where data is fetched from Omdb api...",
    details:
      "This is an amazon-prime clone app where data is fetched from Omdb api... You can search for a movie and view the details.",
    image: "/images/movie-api/10.png",
    subImgs: [
      {
        img: "/images/movie-api/1.png",
      },
      {
        img: "/images/movie-api/2.png",
      },
    ],
    start: "06.03.2022",
    end: "08.03.2022",
    tags: ["REACT JS"],
    source: "https://github.com/pariweshtamr/react-redux-movie-app.git",
    visit: "",
    id: "5",
  },

  {
    title: "Quiz game",
    status: "Complete",
    category: "JAVASCRIPT",
    description: "JS Quiz Application...",
    details:
      "This is a quiz application where a user can test their knowledge on a famous european football club, Manchester United...",
    image: "/images/quiz/8.png",
    subImgs: [
      {
        img: "/images/quiz/1.png",
      },
      {
        img: "/images/quiz/2.png",
      },
    ],
    start: "22.09.2021",
    end: "23.09.2021",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    source: "https://github.com/pariweshtamr/js-man-united-quiz-game.git",
    visit: "https://pariweshtamr.github.io/js-man-united-quiz-game/",
    id: "6",
  },

  {
    title: "Contacts App",
    status: "Complete",
    category: "REACT JS",
    description: "Contacts list application...",
    details:
      "This project is a contacts list app where a user can view a list of contacts and its details when a contact is clicked.",
    image: "/images/contact/3.png",
    subImgs: [
      {
        img: "/images/contact/3.png",
      },
      {
        img: "/images/contact/1.png",
      },
    ],
    start: "19.01.2022",
    end: "20.01.2022",
    tags: ["REACT JS"],
    source: "https://github.com/pariweshtamr/contacts-app.git",
    id: "7",
  },
  {
    title: "To-do List",
    status: "Complete",
    category: "JAVASCRIPT",
    description: "A to-do list application created using javaScript...",
    details:
      "This is a to-do list application created using javaScripy where a user can add, clear or mark-off items on their to-do list.",
    image: "/images/todo/9.png",
    start: "27.09.2021",
    end: "27.09.2021",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    source: "https://github.com/pariweshtamr/js-todo-list",
    visit: "https://pariweshtamr.github.io/js-todo-list/",
    id: "8",
  },
  {
    title: "Tesla Homepage Clone",
    status: "Complete",
    category: "REACT JS",
    description: "This is a clone of official Tesla website home-page.",
    details:
      "This is a clone of official Tesla website home-page. In this project I have tried to build only the home page of official Tesla website using react js. The single page consists of just one component called 'Section' where different props have been passed to show different images and content as you scroll down on the page.",
    image: "/images/tesla/1.png",
    subImgs: [
      {
        img: "/images/tesla/1.png",
      },
      {
        img: "/images/tesla/2.png",
      },
      {
        img: "/images/tesla/full.png",
      },
    ],
    tags: ["REACT JS"],
    start: "01.02.2023",
    end: "01.02.2023",
    source: "https://github.com/pariweshtamr/tesla-homepage-clone",
    visit: "",
    id: "9",
  },
  {
    title: "BharatPe Clone",
    status: "Complete",
    category: "NEXT JS",
    description: "This is a clone of official BharatPe website home-page.",
    details:
      "This is a clone of official BharatPe website home-page. In this project I have tried to build only the home page of official BharatPe website using next js.",
    image: "/images/bharatPe/1.png",
    subImgs: [
      {
        img: "/images/bharatPe/2.png",
      },
      {
        img: "/images/bharatPe/4.png",
      },
      {
        img: "/images/bharatPe/3.png",
      },
    ],
    tags: ["NEXT JS"],
    start: "27.04.2022",
    end: "03.05.2022",
    source: "https://github.com/pariweshtamr/bharatPe-clone",
    visit: "",
    id: "10",
  },
]

export default projects
