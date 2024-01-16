export const App = document.querySelector("#app");

// FUNCTIONAL
export const renderInnerHtml = (element: string): void => {
  App!.innerHTML = element;
};

export const renderElement = (element: HTMLElement): void => {
  App!.appendChild(element);
};

export const replaceElement = (element: HTMLElement): void => {
  App!.replaceWith(element);
};

export const addElement = (element: String): void => {
  App!.innerHTML += element;
};

// CLASS-BASED
export class ComponentBuilder {
  template = "";
  constructor() {}

  register() {
    const div = document.createElement("div");
    div.innerHTML = this.template;
    App!.appendChild(div);
    this.OnMount();
  }

  component() {
    return this.template;
  }

  OnMount() {}
}
