import { ComponentBuilder } from "../renderer";

export class Projects extends ComponentBuilder {
  private projects: Array<any> = [
    [
      {
        name: "Expice",
        img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/expice/2.webp",
      },
      {
        name: "Fake News Detector",
        img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/fake-news/1.webp",
      },
      {
        name: "Pit Arsons",
        img: "/assets/pitarsons.png",
      },
    ],
  ];

  template: string = `
    <section>
        ${this.projects.map((p, i) => {
          return `<div class="projects-container glide multi${i + 1}">
            <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
            ${p
              .map(
                (project: any) =>
                  `<li class="glide__slide">
                  <div class="overlay">
                    
                  </div>
                  
                  <img data-obj='${JSON.stringify(project)}' src="${
                    project.img
                  }"/></li>`
              )
              .join("")}
            </ul>
            </div>
        </div>`;
        })}
    </section>  
  `;
}
