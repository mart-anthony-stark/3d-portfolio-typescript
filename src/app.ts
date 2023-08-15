import { renderElement } from "./renderer";
import { Menu } from "./components/Menu";
import { Main } from "./components/Main";
import { RegisterEvents, intersectionEvent, menuEvent } from "./scripts/events";

new Menu().register();
new Main().register();

RegisterEvents(menuEvent, intersectionEvent);

// CREATE CANVAS ELEMENT
const canvas = document.createElement("canvas");
canvas.id = "bg";
renderElement(canvas);
