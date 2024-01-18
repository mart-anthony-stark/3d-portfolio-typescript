import { ComponentBuilder } from "../renderer";
import "../styles/projects.css";

export interface IProject {
  name: string;
  img: string;
  desc: string;
  link?: string;
  stack?: Array<string>;
}

export class Projects extends ComponentBuilder {
  private projects: Array<IProject> = [
    {
      name: "Earthed",
      img: "/assets/earthed.png",
      desc: "Earthed is a web application for learning earth science. It is a platform for students to learn and teachers to teach earth science in a fun and interactive way with the use of 3D models and gamified quizzes. It is also a platform for teachers to create and share their own lessons and quizzes.",
      link: "https://www.earthed-learning.online",
      stack: ["VueJS", "NodeJS", "MongoDB", "ThreeJS"],
    },
    {
      name: "CamNorth Travel",
      img: "/assets/camnorth2.png",
      desc: "The CamNorth Travel App is a user-friendly mobile application designed to enhance the travel experience for visitors exploring the captivating province of Camarines Norte in the Philippines. The app serves as a comprehensive guide, providing travelers with essential information, interactive maps, and personalized recommendations to ensure a memorable and hassle-free journey.",
      link: "https://github.com/mart-anthony-stark/CamNorth-Travel",
      stack: ["Flutter", "Firebase"],
    },
    {
      name: "School Attendance System",
      img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/shrewsbury/shrewsburry.webp",
      desc: "QR Code Attendance System for Shrewsbury International School Bangkok",
      link: "https://github.com/mart-anthony-stark/Shrewsbury-International-School-SAS",
      stack: ["Vue", "Nodejs", "MongoDB"],
    },
    {
      name: "Pit Arsons",
      img: "/assets/pitarsons.png",
      desc: "Food Ecommerce Web App",
      link: "https://pitarsons.netlify.app/",
      stack: ["React", "Nodejs", "MongoDB"],
    },
    {
      name: "Expice",
      img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/expice/2.webp",
      desc: "Food Delivery and Reservation Web Application for Expice Restaurant",
      stack: ["Vue", "Nodejs", "MongoDB"],
    },
    {
      name: "Fake News Detector",
      img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/fake-news/1.webp",
      desc: "A machine learning application (browser extension) that predicts the probability of selected filipino news article if it is real or fake. The data used in training the model are expertly-curated benchmark dataset for fake news detection in Filipino.",
      link: "https://github.com/mart-anthony-stark/Filipino-Fake-News-Detector-Chrome-Extension",
      stack: ["Python", "Javascript"],
    },
    {
      name: "N-Genly",
      img: "https://github.com/mart-anthony-stark/Ngenly-CLI/blob/main/image-3.png?raw=true",
      desc: "A Nodejs CRUD API generator. N-Genly is an automation tool to create RESTful APIs with basic create, read, update, and delete operations. This also ships with extra utilities like authentication and route guards for rapid development.",
      link: "https://github.com/mart-anthony-stark/Ngenly-CLI",
      stack: ["Typescript", "Javascript", "Nodejs"],
    },
  ];

  template = `
        ${this.projects.map((project) => {
          return `<div class="card" data-link="${project.link}">
                    <figure>
                      <img src='${project.img}' alt='${project.name}'/>        
                    </figure>
                    <div class="details">
                      <h4>${project.name} ${
            project.link
              ? '<i class="fa fa-external-link-square" aria-hidden="true"></i>'
              : ""
          }</h4>
                      <p>${project.desc}</p>
                      <div class="tech-stack">
                        ${project.stack
                          ?.map((tech) => `<div class="tech">${tech}</div>`)
                          .join("")}
                      </div>
                    </div>
                  </div>`;
        })}
  `;
}
