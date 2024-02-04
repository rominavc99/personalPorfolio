import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
  readinglist,
  frontend,
  multimedia,
  webdesing,
} from "../assets"



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: frontend,
  },
  {
    title: "Multimedia Designer",
    icon: multimedia,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: webdesing,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Multimedia Production Freelance",
    company_name: "Dino Studio",
    icon: logo,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Independet project development covering desing aspects, such as branding, video editing, 2D animation, illustration.",
      "Creation of simple websites, such as landing pages",
      "Personal projects developed using React and database management with Sanity.io",
      
    ],
  },
    {
    title: "Player Support Rep",
    company_name: "5CA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jan 2024",
    points: [
      "Player support assistance for videogame company through emails and chats in English and Spanish.",
      "IT troubleshooting and account management of players accounts",
      
    ],
  },
  {
    title: "HR Intern - Success Factors",
    company_name: "5CA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jan 2024",
    points: [
      "Configuration of HR System modules for Time-Off management, using Success Factors.",
      "Content creation for training modules for the company employees.",
      "Creation and mantaining SharePoint pages",
    ],
  },
  {
    title: "Full Stack Dev Internship",
    company_name: "Mediaérea Drone Solutions",
    icon: meta,
    iconBg: "#EE3C3C",
    date: "Jul 2023 - Nov 2023",
    points: [
      "Professional internship for backend development usint Python and Django",
      "Frontend development using Bootstrap, HTML, CSS and JS.",
    ],
  },
  {
    title: "Full Stack Developer Junior",
    company_name: "Mediaérea Drone Solutions",
    icon: meta,
    iconBg: "#EE3C3C",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility with Bootstrap and Metronic.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I recommend her work, creative and in",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Romina's reading list",
    description:
      "Web-based platform that works as a personal journal for book entries, allows users to read through my posts and search using book titles or authors' names. It has an admin view for me, with a basic login that takes me to the main admin page where I can add, edit, or delete book entries, implementing one of the Public Library's APIs.",
    tags: [
      {
        name: "elephantSQL",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: readinglist,
    source_code_link: "https://rominasreadinglist.onrender.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };