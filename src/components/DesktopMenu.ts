import { ComponentBuilder } from "../renderer";
import { menuItemsList } from "./Menu";

export class DesktopMenu extends ComponentBuilder {
  constructor() {
    super();
  }
  OnMount(): void {
    console.log("🚀Component did mount🚀");
  }

  template = `
    <div class="main-links">
        ${menuItemsList
          .map(
            (item) =>
              `<a id="main-${item.name}-link" href='${item.link}'>
              <span class="indicator">
              </span>
              <span>
                ${item.name.toUpperCase()}
              </span>
              </a>`
          )
          .join("")}
    </div>
    `;
}
