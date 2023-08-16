export const RegisterEvents = (...events: Array<Function>) => {
  events.forEach((e) => e());
};

export const menuEvent = () => {
  const burger = document.querySelector(".burger");
  const main = document.querySelector("main");
  const menuList = document.querySelector(".menu-list");
  const menuItems = document.querySelectorAll(".menu-list a");

  burger!.addEventListener("click", () => {
    burger!.classList.toggle("open");
    menuList!.classList.toggle("hidden");
    main!.classList.toggle("hidden");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      setTimeout(() => {
        burger!.classList.remove("open");
        menuList!.classList.toggle("hidden");
        main!.classList.toggle("hidden");
      }, 300);
    });
  });
};

export const intersectionEvent = () => {
  const ids = ["home", "about", "projects"];
  const elements = ids.map((el) => document.querySelector(`#${el}`));
  const navItems = ids.map((el) => document.querySelector(`#${el}-link`));

  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          console.log("visible:", entry.target.id);
          window.history.pushState({}, entry.target.id, `#${entry.target.id}`);

          navItems.forEach((item) => {
            if (`${entry.target.id}-link` === item!.id) {
              item?.classList.add("active");
            } else {
              item?.classList.remove("active");
            }
          });
          break;
        }
      }
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => {
    if (el) observer.observe(el!);
  });
};
