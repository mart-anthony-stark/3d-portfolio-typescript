export const menuEvent = () => {
  const burger = document.querySelector(".burger");
  const main = document.querySelector("main");
  const menuList = document.querySelector(".menu-list");
  const menuItems = document.querySelectorAll(".menu-list a");
  const mainMenuItems = document.querySelectorAll(".main-links a");

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
  mainMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
      item.classList.add("active");
    });
  });
};

export const intersectionEvent = () => {
  const ids = ["about", "projects", "contact"];
  const elements = ids.map((el) => document.querySelector(`#${el}`));
  const navItems = ids.map((el) => document.querySelector(`#${el}-link`));
  const mainNavItems = ids.map((el) =>
    document.querySelector(`#main-${el}-link`)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          window.history.pushState({}, entry.target.id, `#${entry.target.id}`);

          navItems.forEach((item) => {
            if (`${entry.target.id}-link` === item!.id) {
              item?.classList.add("active");
            } else {
              item?.classList.remove("active");
            }
          });
          mainNavItems.forEach((item) => {
            if (`main-${entry.target.id}-link` === item!.id) {
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

export const cardsEvent = () => {
  const cards = document.querySelectorAll(".glide__slide");
  cards?.forEach((card) => {
    card.addEventListener("click", (e: any) => {
      const value = JSON.parse(e.target.getAttribute("data-obj"));
      console.log(value);
    });
  });
};
