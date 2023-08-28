import { ComponentBuilder } from "../renderer";
import "../styles/techstack.css";

export class TechStack extends ComponentBuilder {
  private stack: Array<string> = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Angular",
    "Flutter",
    "NodeJS",
    "ThreeJS",
  ];
  template: string = `
    <div class="techstack">
        ${this.stack
          .map(
            (tech) => `
            <div class="stack">
                <img src='/icons/${tech.toLowerCase()}.svg' />
                <span>${tech}</span>
            </div>
        `
          )
          .join("")}
    </div>
    `;
}
