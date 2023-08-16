import { Menu } from "./components/Menu";
import { RegisterEvents, intersectionEvent, menuEvent } from "./events";
// import { SpaceshipScene } from "./components/SpaceshipScene";

const bootstrap = async () => {
  const { GalaxyScene } = await import("./components/GalaxyScene");
  const { Main } = await import("./components/Main");

  new GalaxyScene().register();
  new Menu().register();
  new Main().register();
  // new SpaceshipScene().register();

  RegisterEvents(menuEvent, intersectionEvent);
};

bootstrap();
