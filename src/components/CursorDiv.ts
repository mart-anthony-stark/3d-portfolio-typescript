import { ComponentBuilder } from "../renderer";
import "../styles/cursor.css";

export class CursorDiv extends ComponentBuilder {
  template: string = `
    <div id="cursor"></div>
    `;
}
