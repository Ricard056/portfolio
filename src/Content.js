// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import cpp from "./assets/images/Skills/cpp.png";
import linux from "./assets/images/Skills/linux.png";
import git from "./assets/images/Skills/git.png";
import datastructure from "./assets/images/Skills/datastructure.png";
import postman from "./assets/images/Skills/postman.png";
import java from "./assets/images/Skills/java.png";
import uml from "./assets/images/Skills/uml.png";
import typescript from "./assets/images/Skills/typescript.png";
import teamwork from "./assets/images/Skills/teamwork.png";
import python from "./assets/images/Skills/python.png";
import graphql from "./assets/images/Skills/graphql.png";
import symfony from "./assets/images/Skills/symfony.png";
import flask from "./assets/images/Skills/flask.png";
import azure from "./assets/images/Skills/azure.png";
import docker from "./assets/images/Skills/docker.png";
import redis from "./assets/images/Skills/redis.png";
import vitejs from "./assets/images/Skills/vitejs.png";
import solidworks from "./assets/images/Skills/solidworks.png";
import sequelize from "./assets/images/Skills/sequelize.png";
import css3 from "./assets/images/Skills/css3.png";
import html5 from "./assets/images/Skills/html5.png";
import latex from "./assets/images/Skills/latex.png";
import matlab from "./assets/images/Skills/matlab.png";
import figma from "./assets/images/Skills/figma.png";
import axios from "./assets/images/Skills/axios.png";
import redux from "./assets/images/Skills/redux.png";
import photoshop from "./assets/images/Skills/photoshop.png";



import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import cert1 from "./assets/images/Certifications/cert1.png";
import cert2 from "./assets/images/Certifications/cert2.png";
import cert3 from "./assets/images/Certifications/cert3.png";
import cert4 from "./assets/images/Certifications/cert4.png";
import cert5 from "./assets/images/Certifications/cert5.png";
import cert6 from "./assets/images/Certifications/cert6.png";
import cert7 from "./assets/images/Certifications/cert7.png";

import project0 from "./assets/images/Projects/img0.png";
import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";
import project6 from "./assets/images/Projects/img6.png";
import project7 from "./assets/images/Projects/img7.png";


import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import hireme_person from "./assets/images/Hireme/person.png";


import { GrMail } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { TbCertificate, TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import {SiUpwork} from "react-icons/si";
// import {TbBrandFiverr} from "react-icons/tb";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";

const Nav = [
    {
        link: "#home",
        icon: TbSmartHome,
    },
    {
        link: "#aboutme",
        icon: BiUser,
    },
    {
        link: "#skills",
        icon: GiSkills,
    },
    {
        link: "#certifications",
        icon: TbCertificate,
    },
    {
        link: "#services",
        icon: RiServiceLine,
    },
    {
        link: "#projects",
        icon: RiProjectorLine,
    },
    {
        link: "#contact",
        icon: MdOutlinePermContactCalendar,
    },
];

const social_media = [
    {
        text: "rasgsolis@gmail.com",
        icon: GrMail,
        link: "mailto:rasgsolis@gmail.com",
    },
    {
        text: "Ricardo Solis",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/ricardo-alberto-solis-gil-7167b719a/",
    },
    {
        text: "Ricardo Solis",
        icon: AiFillGithub,
        link: "https://github.com/Ricard056",
    },
];
const cert_content = [
    {
        title: "Full Stack Web Development",
        link: "https://certificates.academlo.com/en/verify/41544372331912",
        image: cert1,
    },
    {
        title: "Back-End Node",
        link: "https://certificates.academlo.com/en/verify/55022970118536",
        image: cert2,
    },
    {
        title: "Front-End React",
        link: "https://certificates.academlo.com/en/verify/06391131329403",
        image: cert3,
    },
    {
        title: "Foundations in HTMLS, CSS & Javascript ",
        link: "https://certificates.academlo.com/en/verify/02317832934895",
        image: cert4,
    },
    {
        title: "Diplomado en programación orientada a objetos usando Python ",
        link: "https://drive.google.com/file/d/1X-AamODpz_AIhs5cXlfZUeB4PMZGRnN6/view?usp=drive_link",
        image: cert5,
    },
    {
        title: "Solidworks - Mechanical Design",
        link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-UH5VQJEBLG",
        image: cert6,
    },

    /*
    Quizas a futuro:
        title: "MongoDB Node.js Developer Path",
        link: "https://learn.mongodb.com",

        title: "MongoDB Data Modeling",
        link: "https://learn.mongodb.com",

        title: "MongoDB java Developer Path",
        link: "https://learn.mongodb.com/",

        title: "React + Redux ",
        link: "https://www.sololearn.com/",

        title: "Postman API Fundamentals Student Expert",
        link: "https://badgr.com/",

        title: "SQL (Advanced)",
        link: "https://www.hackerrank.com/",

        title: "MongoDB Python Developer Path",
        link: "https://ti-user-certificates.s3.amazonaws.com/",
    */

];

export const content = {
    en: { //! HERE HERE
        Nav,
        hero: {
            title: "Full-Stack Web Developer",
            firstName: "RICARDO",
            LastName: "SOLIS",
            btnText: "View my resume",
            btnLink: "https://www.canva.com/design/DAF2nR84X-A/qHK209wO2dT_LF7FDjrqOg/view",
            image: Hero_person,
            hero_content: [
                {
                    count: `+${new Date(new Date() - new Date("2021-07-14")).getFullYear() - 1970}`,    //Lo cuento desde Python
                    text: "Engaged in Full-Stack Development with a focus on JavaScript technologies",
                },
                {
                    count: "10+",
                    text: "Major Projects in Web Development",
                },
            ],
        },
        skills: {
            title: "Skills",
            subtitle: "MY TOP SKILLS",
            skills_content: [
                {
                    name: "React js | Next js",
                    para: "Developing dynamic and modern interfaces, including Redux, Hooks, Material UI, Typescript, and Tailwind CSS",
                    logo: reactjs,
                },
                {
                    name: "Node js | Express.js",
                    para: "Building robust APIs using REST and GraphQL",
                    logo: nodejs,
                },
                {
                    name: "TypeScript | JavaScript",
                    para: "Efficient development in both frontend and backend with React, Next.js, and Node.js",
                    logo: typescript,
                },
                {
                    name: "Axios",
                    para: "Handling HTTP requests for efficient and secure data retrieval and manipulation",
                    logo: axios,
                },
                {
                    name: "HTML-5",
                    para: "Structuring websites with modern and accessible practices",
                    logo: html5,
                },
                {
                    name: "CSS-3",
                    para: "Responsive design and advanced styling of web interfaces",
                    logo: css3,
                },
                {
                    name: "Git | GitHub",
                    para: "Experience in version control and project collaboration",
                    logo: git,
                },
                {
                    name: "MySql | PostgreSql",
                    para: "Management of relational databases and data integration in web applications",
                    logo: mysql,
                },
                {
                    name: "Python",
                    para: "Object-oriented programming and scripting with Python",
                    logo: python,
                },
                {
                    name: "Postman",
                    para: "Automated API testing to ensure quality and performance",
                    logo: postman,
                },
                {
                    name: "Sequelize",
                    para: "ORM for Node.js, facilitating SQL database interactions",
                    logo: sequelize,
                },
                {
                    name: "Figma",
                    para: "Basic knowledge in UI design and prototyping",
                    logo: figma,
                },
                {
                    name: "Adobe Photoshop",
                    para: "Creating and editing graphics and images for web and print",
                    logo: photoshop,
                },
                {
                    name: "c | c++",
                    para: "University projects and fundamentals of data structures and algorithms",
                    logo: cpp,
                },
                {
                    name: "MATLAB",
                    para: "Utilized in university projects for engineering",
                    logo: matlab,
                },
                {
                    name: "LaTeX",
                    para: "Used for creating professional documents in academic projects",
                    logo: latex,
                },
                {
                    name: "SolidWorks",
                    para: "Mechanical design and CAD modeling",
                    logo: solidworks,
                },
                {
                    name: "teamwork | communication",
                    para: "Teamwork abilities and effective communication skills",
                    logo: teamwork,
                },

                // {
                //     name: "Bootstrap",
                //     para: "Framework de CSS para diseño responsivo",
                //     logo: bootstrap,
                // },
                // {
                //     name: "CorelDRAW",
                //     para: "Diseño gráfico y vectorial",
                //     logo: coreldraw,
                // },

                // {
                //     name: "MongoDB developer | DBA",
                //     para: "in NodeJs & Java & Php",
                //     logo: mongodb,
                // },
                // {
                //     name: "Symfony",
                //     para: "Full stack Ecommerce App",
                //     logo: symfony,
                // },
                // { 
                //     name: "Flask",
                //     para: "Crud app with angular to manage cars",
                //     logo: flask,
                // }, //! Proximamente...
                // {
                //     name: "Graphql",
                //     para: "With Apollo server/client",
                //     logo: graphql,
                // }, //! Proximamente...
                // {
                //     name: "Linux (Debian based)",
                //     para: "Familiar with bash scripting & system administration basics",
                //     logo: linux,
                // },                
                // {
                //     name: "Data Structure | Problem Solving | Graph Theory",
                //     para: "in c & c++ & java & javascript",
                //     logo: datastructure,
                // },                
                // {
                //     name: "Java",
                //     para: "Swing (Desktop Graphical User Interface)",
                //     logo: java,
                // },
                // {
                //     name: "UML | Data Modeling(Sql & NoSql)",
                //     para: "Software Design & Analysis with common design patterns",
                //     logo: uml,
                // },                
                // {
                //     name: "Microsoft Azure",
                //     para: "with Azure blob storage & Azure VM & Azure App Service",
                //     logo: azure,
                // }, 
                // {
                //     name: "Docker",
                //     para: "with docker-compose , portainer ...",
                //     logo: docker, 
                // }, //! Proximamente...
                // {
                //     name: "redis",
                //     para: "for caching and session management",
                //     logo: redis,
                // }, //! Proximamente...
            ],
        },
        services: {
            title: "Services",
            subtitle: "WHAT I OFFER",
            service_content: [
                {
                    title: "Web Development",
                    para: "As a Full-Stack Web Developer, I have engaged in a diverse range of projects, from e-commerce platforms " +
                        "to interactive web applications like a Pokedex. My experience spans both front-end and back-end development, " +
                        "utilizing key technologies such as JavaScript, React JS, Node JS, and SQL. I pride myself on creating intuitive " +
                        "and dynamic user interfaces, as well as ensuring efficient and secure server-side performance.",
                    logo: services_logo1,
                },
                {
                    title: "Data modeling & Prototyping",
                    para: "Data modeling and prototyping are crucial phases in any project development. With my background in " +
                        "engineering sciences and hands-on experience in web application development, I bring a unique perspective to turn " +
                        "ideas into tangible solutions. My approach focuses on deeply understanding project needs to design efficient data " +
                        "models and functional prototypes, laying a solid foundation for further development.",
                    logo: services_logo3,
                },
            ],
        },
        Projects: {
            title: "Projects",
            subtitle: "MY CREATION",
            project_content: [
                {
                    title: "eCommerce with personal backend",
                    image: project0,
                    link: "https://comfy-naiad-be7da3.netlify.app/",
                    githubLink: "https://github.com/Ricard056/node-e6-backend-e_commerce/",
                },
                {
                    title: "REACT Users and Redux",
                    image: project1,
                    link: "https://delicate-cactus-1a15b4.netlify.app/#/signup",
                    githubLink: "https://github.com/Ricard056/node-e4-React-users_app",
                },
                {
                    title: "REACT CRUD Movies",
                    image: project2,
                    link: "https://deft-mooncake-5613bb.netlify.app/#/",
                    githubLink: "https://github.com/Ricard056/node-e3-React-crud_movies/",
                },
                {
                    title: "eCommerce",
                    image: project3,
                    link: "https://majestic-tapioca-a6ef3f.netlify.app/",
                    githubLink: "https://github.com/Ricard056/React-entregable6-eCommerce",
                },
                {
                    title: "Pokedex",
                    image: project4,
                    link: "https://effortless-gingersnap-0df380.netlify.app/",
                    githubLink: "https://github.com/Ricard056/React-entregable5-pokeAPI",
                },
                {
                    title: "Rick and Morty API",
                    image: project5,
                    link: "https://curious-granita-ad8923.netlify.app/",
                    githubLink: "https://github.com/Ricard056/React-Entregable3-RickAndMorty",
                },
                // {
                //     title: "PENDIENTE",
                //     image: project7,
                //     link: "",
                //     githubLink: "",
                // },
            ],
        },
        Testimonials: {
            title: "Testimonials",
            subtitle: "MY CLIENT REVIEWS",
            testimonials_content: [
                {
                    review:
                        "Solis was terrific, did a great job understanding my projects' needs, and delivered super fast! " +
                        "I highly recommend his services.”",
                    img: avatar3,
                    name: "PENDIENTE Fiver Client",
                    rating: 5

                }, {
                    review:
                        "“I wanted to take a moment to share my positive experience with Solis, whom I recently hired to " +
                        "assist with our company's rebranding effort.”",
                    img: avatar3,
                    name: "PENDIENTE Fiver Client",
                    rating: 5
                },
                {
                    review:
                        "“Thank you for reaching out and for your great work . we are very satisfied with the final product. " +
                        "Your expertise and professionalism were invaluable to our project, and I have no doubt that you will " +
                        "continue to provide excellent services”",
                    img: avatar1,
                    name: "PENDIENTE ensemble's designer ",
                    rating: 5
                },
                {
                    review:
                        "“I know how important it is to work with reliable, flexible, and responsive individuals, and Solis certainly demonstrated these qualities throughout the entire project.  Their expertise and attention to detail were invaluable”",
                    img: avatar2,
                    name: "PENDIENTE It Geeks's team leader",
                    rating: 5
                }
            ],
        },
        Aboutme: {
            title: "About Me",
            subtitle: "Hello! I'm Ricardo Solis, a passionate Full-Stack Web Developer",
            image1: hireme_person,
            image2: hireme_person,
            para: "As a software engineer with a background in mechanical engineering, " +
                "I combine technical expertise with a passion for web development. " +
                "Specializing in JavaScript, React, and Node.js, I focus on creating " +
                "intuitive and dynamic web applications. My projects demonstrate my " +
                "ability to handle complex functionalities and design responsive interfaces.\n\n" +
                "Beyond coding, my experience in education has sharpened my skills in " +
                "communication and teamwork. I'm committed to learning and collaborating " +
                "on impactful software solutions.",
            btnText: "More about me",
        },
        Contact: {
            title: "Contact Me",
            // subtitle: "LET'S GET IN TOUCH"
            social_media,
        },
        Certifications: {
            title: "Certifications",
            subtitle: "My Certifications",
            cert_content,
        },
    },
    es: { //! HERE HERE
        Nav,
        hero: {
            title: "Desarrollador Web Full-Stack",
            firstName: "RICARDO",
            LastName: "SOLIS",
            btnText: "Consulte mi currículum vítae",
            btnLink: "https://www.canva.com/design/DAF2nR84X-A/qHK209wO2dT_LF7FDjrqOg/view",
            image: Hero_person,
            hero_content: [
                {
                    count: `+${new Date(new Date() - new Date("2021-07-14")).getFullYear() - 1970}`,
                    text: "Enfocado en el Desarrollo Full-Stack con énfasis en tecnologías JavaScript",
                },
                {
                    count: "10+",
                    text: "Proyectos Principales en Desarrollo Web",
                },
            ],
        },
        skills: {
            title: "Habilidades",
            subtitle: "Mis mejores habilidades",
            skills_content: [
                {
                    name: "React js | Next js",
                    para: "Desarrollo de interfaces dinámicas y modernas, incluyendo Redux, Hooks, Material UI, Typescript y Tailwind CSS",
                    logo: reactjs,
                },
                {
                    name: "Node js | Express.js",
                    para: "Construcción de APIs robustas utilizando REST",
                    logo: nodejs,
                },
                {
                    name: "TypeScript | JavaScript",
                    para: "Desarrollo eficiente tanto en frontend como en backend con React, Next.js y Node.js",
                    logo: typescript,
                },
                {
                    name: "Axios",
                    para: "Manejo de solicitudes HTTP para la recuperación y manipulación de datos eficiente y segura",
                    logo: axios,
                },
                {
                    name: "HTML-5",
                    para: "Estructuración de sitios web con prácticas modernas y accesibles",
                    logo: html5,
                },
                {
                    name: "CSS-3",
                    para: "Diseño responsivo y estilización avanzada de interfaces web",
                    logo: css3,
                },
                {
                    name: "Git | GitHub",
                    para: "Experiencia en control de versiones y colaboración en proyectos",
                    logo: git,
                },
                {
                    name: "MySql | PostgreSql",
                    para: "Gestión de bases de datos y modelado de datos",
                    logo: mysql,
                },
                {
                    name: "Python",
                    para: "Aplicación de teoría de grafos y desarrollo de scripts",
                    logo: python,
                },
                {
                    name: "Postman",
                    para: "Pruebas automatizadas de API para asegurar calidad y rendimiento",
                    logo: postman,
                },
                {
                    name: "Sequelize",
                    para: "ORM para Node.js, facilitando la interacción con bases de datos SQL",
                    logo: sequelize,
                },
                {
                    name: "Figma",
                    para: "Conocimientos básicos en diseño de UI y prototipado",
                    logo: figma,
                },
                {
                    name: "Adobe Photoshop",
                    para: "Creación y edición de gráficos e imágenes para web e impresión",
                    logo: photoshop,
                },
                {
                    name: "c | c++",
                    para: "Proyectos universitarios y fundamentos de estructuras de datos y algoritmos",
                    logo: cpp,
                },
                {
                    name: "MATLAB",
                    para: "Utilizado en proyectos universitarios para ingeniería",
                    logo: matlab,
                },
                {
                    name: "LaTeX",
                    para: "Utilizado para la creación de documentos profesionales en proyectos académicos",
                    logo: latex,
                },
                {
                    name: "SolidWorks",
                    para: "Diseño mecánico y modelado CAD",
                    logo: solidworks,
                },
                {
                    name: "Trabajo en equipo | Comunicacion",
                    para: "Habilidades de trabajo en equipo y comunicación efectiva",
                    logo: teamwork,
                },
            ],
        },

        services: {
            title: "Servicios",
            subtitle: "Lo que ofrezco",
            service_content: [
                {
                    title: "Desarrollo Web Full-Stack",
                    para: "Como desarrollador web full-stack, he participado en una amplia gama de proyectos, desde plataformas de comercio electrónico hasta aplicaciones web interactivas como una Pokedex. Mi experiencia abarca tanto el desarrollo front-end como el back-end, utilizando tecnologías clave como JavaScript, React JS, Node JS y SQL. Me enorgullezco de crear interfaces de usuario intuitivas y dinámicas, así como de asegurar un rendimiento eficiente y seguro en el lado del servidor.",
                    logo: services_logo1,
                },
                {
                    title: "Modelado de Datos y Prototipado",
                    para: "El modelado de datos y el prototipado son fases esenciales en el desarrollo de cualquier proyecto. Con mi formación en ciencias de la ingeniería y mi experiencia práctica en el desarrollo de aplicaciones web, aporto una perspectiva única para transformar ideas en soluciones concretas. Mi enfoque se centra en comprender profundamente las necesidades del proyecto para diseñar modelos de datos eficientes y prototipos funcionales que sirvan como base sólida para el desarrollo posterior.                    ",
                    logo: services_logo3,
                },
            ],
        },
        Projects: {
            title: "Proyectos",
            subtitle: "Mis creaciones",
            project_content: [
                {
                    title: "eCommerce with personal backend",
                    image: project0,
                    link: "https://comfy-naiad-be7da3.netlify.app/",
                    githubLink: "https://github.com/Ricard056/node-e6-backend-e_commerce/",
                },
                {
                    title: "REACT Users and Redux",
                    image: project1,
                    link: "https://delicate-cactus-1a15b4.netlify.app/#/signup",
                    githubLink: "https://github.com/Ricard056/node-e4-React-users_app",
                },
                {
                    title: "REACT CRUD Movies",
                    image: project2,
                    link: "https://deft-mooncake-5613bb.netlify.app/#/",
                    githubLink: "https://github.com/Ricard056/node-e3-React-crud_movies/",
                },
                {
                    title: "eCommerce",
                    image: project3,
                    link: "https://majestic-tapioca-a6ef3f.netlify.app/",
                    githubLink: "https://github.com/Ricard056/React-entregable6-eCommerce",
                },
                {
                    title: "Pokedex",
                    image: project4,
                    link: "https://effortless-gingersnap-0df380.netlify.app/",
                    githubLink: "https://github.com/Ricard056/React-entregable5-pokeAPI",
                },
                {
                    title: "Rick and Morty API",
                    image: project5,
                    link: "https://curious-granita-ad8923.netlify.app/",
                    githubLink: "https://github.com/Ricard056/React-Entregable3-RickAndMorty",
                },
                // {
                //     title: "PENDIENTE",
                //     image: project6,
                //     link: "",
                //     githubLink: "",
                // },
                // {
                //     title: "PENDIENTE",
                //     image: project7,
                //     link: "",
                //     githubLink: "",
                // },
            ],
        },
        Testimonials: {
            title: "Testimonials",
            subtitle: "MY CLIENT REVIEWS",
            testimonials_content: [
                {
                    review:
                        "Solis was terrific, did a great job understanding my projects' needs, and delivered super fast! " +
                        "I highly recommend his services.”",
                    img: avatar3,
                    name: "PENDIENTE Fiver Client",
                    rating: 5

                }, {
                    review:
                        "“I wanted to take a moment to share my positive experience with Solis, whom I recently hired to " +
                        "assist with our company's rebranding effort.”",
                    img: avatar3,
                    name: "PENDIENTE Fiver Client",
                    rating: 5
                },
                {
                    review:
                        "“Thank you for reaching out and for your great work . we are very satisfied with the final product. " +
                        "Your expertise and professionalism were invaluable to our project, and I have no doubt that you will " +
                        "continue to provide excellent services”",
                    img: avatar1,
                    name: "PENDIENTE ensemble's designer ",
                    rating: 5
                },
                {
                    review:
                        "“I know how important it is to work with reliable, flexible, and responsive individuals, and Solis certainly demonstrated these qualities throughout the entire project.  Their expertise and attention to detail were invaluable”",
                    img: avatar2,
                    name: "PENDIENTE It Geeks's team leader",
                    rating: 5
                }
            ],
        },
        Aboutme: {
            title: "Acerca de Mí",
            subtitle: "¡Hola! Soy Ricardo Solis, un apasionado Desarrollador Web Full-Stack",
            image1: hireme_person,
            image2: hireme_person,
            para: "Como ingeniero de software con formación en ingeniería mecánica, combino la experiencia técnica con una pasión por el desarrollo web. Especializándome en JavaScript, React y Node.js, me concentro en crear aplicaciones web intuitivas y dinámicas. Mis proyectos demuestran mi capacidad para manejar funcionalidades complejas y diseñar interfaces responsivas. Más allá de la programación, mi experiencia en educación ha agudizado mis habilidades en comunicación y trabajo en equipo. Estoy comprometido con el aprendizaje y la colaboración en soluciones de software impactantes.",
            btnText: "Más información",
        },
        Contact: {
            title: "Contáctame",
            // subtitle: "RESTONS EN CONTACT",
            social_media,
        },
        Certifications: {
            title: "Certificaciones",
            subtitle: "Mis Certificaciones",
            cert_content,
        },
    },
};
