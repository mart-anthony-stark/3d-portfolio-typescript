import { ComponentBuilder } from "../renderer";
import "../styles/projects.css";

export interface IProject {
  name: string;
  img: string;
  desc: string;
  link?: string;
}

export class Projects extends ComponentBuilder {
  private projects: Array<IProject> = [
    {
      name: "Pit Arsons",
      img: "/assets/pitarsons.png",
      desc: "Food Ecommerce Web App",
      link: "https://pitarsons.netlify.app/",
    },
    {
      name: "Expice",
      img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/expice/2.webp",
      desc: "Food Delivery App",
    },
    {
      name: "Fake News Detector",
      img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/fake-news/1.webp",
      desc: "A machine learning application (browser extension) that predicts the probability of selected filipino news article if it is real or fake. The data used in training the model ",
      link: "https://github.com/mart-anthony-stark/Filipino-Fake-News-Detector-Chrome-Extension",
    },
  ];

  template: string = `
        ${this.projects.map((project) => {
          return `<div class="card" data-link="${project.link}">
                    <figure>
                      <img src='${project.img}' alt='${project.name}'/>        
                    </figure>
                    <div class="details">
                      <h4>${project.name}</h4>
                      <p>${project.desc}</p>
                    </div>
                  </div>`;
        })}
  `;
}
