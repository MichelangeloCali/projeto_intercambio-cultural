import outsideClick from "./outsideClick.js";

// Menu mobile
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const activeClass = "ativo";
  const events = ["click", "touch"];

  function openMenu() {
    menuButton.classList.add(activeClass);
    menuList.classList.add(activeClass);
    outsideClick(menuList, events, () => {
      menuButton.classList.remove(activeClass);
      menuList.classList.remove(activeClass);
    });
  }

  if (menuButton) {
    events.forEach((event) => {
      menuButton.addEventListener(event, openMenu);
    });
  }
}
