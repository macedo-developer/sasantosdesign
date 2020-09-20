const navSlide = () => {
  const hamburguer = document.querySelector(".hamburguer");
  const nav = document.querySelector("#menu");
  const itemMenu = document.querySelectorAll("#menu .menu-item");

  hamburguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    itemMenu.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `menu-item-fade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    hamburguer.classList.toggle("toggle");
  });
};

navSlide();
