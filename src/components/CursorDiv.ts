import { ComponentBuilder } from "../renderer";
import "../styles/cursor.css";

export class CursorDiv extends ComponentBuilder {
  template: string = `
    <div id="cursor"></div>
    `;

  OnMount(): void {
    const radialGradient = document.querySelector("#cursor") as HTMLDivElement;

    document.addEventListener("mousemove", (event) => {
      if (!radialGradient) {
        return;
      }
      const x = event.clientX;
      const y = event.clientY;
      radialGradient.style.setProperty("--cursor-x", `${x}px`);
      radialGradient.style.setProperty("--cursor-y", `${y}px`);
    });
  }
}
