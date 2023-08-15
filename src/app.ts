import { Menu } from "./components/Menu";
import { Main } from "./components/Main";
import { RegisterEvents, intersectionEvent, menuEvent } from "./events";
import { SpaceshipScene } from "./components/SpaceshipScene";
import { GalaxyScene } from "./components/GalaxyScene";

new GalaxyScene().register();
new Menu().register();
new Main().register();
new SpaceshipScene().register();

RegisterEvents(menuEvent, intersectionEvent);
