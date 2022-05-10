// Menu dropdown para mobile.
import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const activeClass = "ativo";
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add(activeClass);
    outsideClick(this, ["touch", "click"], () => {
      this.classList.remove(activeClass);
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touch", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
