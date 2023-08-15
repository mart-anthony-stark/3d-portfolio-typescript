import { ComponentBuilder } from "../renderer";

interface IMenuItem {
  link: String;
  name: String;
}

const menuItemsList: Array<IMenuItem> = [
  { link: "#", name: "home" },
  { link: "#about", name: "about" },
  { link: "#projects", name: "projects" },
  { link: "#contact", name: "contact" },
];

export class Menu extends ComponentBuilder {
  constructor() {
    super();
  }
  OnMount(): void {
    console.log("🚀Component did mount🚀");
  }

  template = `
    <div class="burger">
        <div class="bar"></div>
    </div>
    <div class="menu-list hidden">
        ${menuItemsList
          .map(
            (item) =>
              `<a id="${item.name}-link" class="text-stroke nav-item" href='${
                item.link
              }'>${item.name.toUpperCase()}</a>`
          )
          .join("")}
    </div>
    `;
}
