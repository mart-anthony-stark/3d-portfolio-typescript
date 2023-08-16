import { Menu } from "./components/Menu";
import * as EVENTS from "./events";
// import { SpaceshipScene } from "./components/SpaceshipScene";

export const RegisterEvents = (...events: Array<Function>) => {
  events.forEach((e) => {
    if (typeof e === "function") e();
  });
};

const bootstrap = async () => {
  const { GalaxyScene } = await import("./components/GalaxyScene");
  const { Main } = await import("./components/Main");

  new GalaxyScene().register();
  new Menu().register();
  new Main().register();
  // new SpaceshipScene().register();

  const events: any = EVENTS;
  for (const key in EVENTS) {
    RegisterEvents(events[key]);
  }
};

bootstrap();
