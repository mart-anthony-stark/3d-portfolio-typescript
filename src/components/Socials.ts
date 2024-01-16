import { ComponentBuilder } from "../renderer";
import "../styles/socials.css";

export interface ISocials {
  name: string;
  class: string;
  link: string;
}

export const socials: Array<ISocials> = [
  {
    name: "GitHub",
    class: "fa fa-github",
    link: "https://github.com/mart-anthony-stark",
  },
  {
    name: "LinkedIn",
    class: "fa fa-linkedin-square",
    link: "https://www.linkedin.com/in/mart-salazar/",
  },
  {
    name: "Instagram",
    class: "fa fa-instagram",
    link: "https://www.instagram.com/hypermaaart/",
  },
  {
    name: "Twitter",
    class: "fa fa-twitter",
    link: "https://twitter.com/hypermaaart",
  },
];

export class Socials extends ComponentBuilder {
  template = `
    <div class="socials">
        ${socials
          .map(
            (social) => `
        
            <a href="${social.link}" target="_blank">
                <i class="${social.class}" aria-hidden="true"></i>
            </a>
        `
          )
          .join("")}
    </div>
    `;
}
