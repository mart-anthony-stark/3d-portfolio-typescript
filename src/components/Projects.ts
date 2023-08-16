import { ComponentBuilder } from "../renderer";

export class Projects extends ComponentBuilder {
  private projects: Array<any> = [
    [
      {
        name: "Expice",
        img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/expice/2.webp",
      },
      {
        name: "b",
        img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/fake-news/1.webp",
      },
      {
        name: "c",
        img: "https://www.hindustantimes.com/ht-img/img/2023/04/13/550x309/jujutsu-kaisen_1677610900982_1681390659209_1681390659209.webp",
      },
    ],
    [
      {
        name: "Expice",
        img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/expice/2.webp",
      },
      {
        name: "b",
        img: "https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/fake-news/1.webp",
      },
      {
        name: "c",
        img: "https://www.hindustantimes.com/ht-img/img/2023/04/13/550x309/jujutsu-kaisen_1677610900982_1681390659209_1681390659209.webp",
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
                  `<li class="glide__slide"><img data-obj='${JSON.stringify(
                    project
                  )}' src="${project.img}"/></li>`
              )
              .join("")}
            </ul>
            </div>
        </div>`;
        })}
    </section>  
  `;
}
