// Menu dropdown para mobile.
import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.activeClass = "ativo";
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define o touch e click.
    if (events === undefined) {
      this.events = ["touch", "click"];
    } else {
      this.events = events;
    }

    this.dropdownMenuActive = this.dropdownMenuActive.bind(this);
  }

  // Ativa o dropdownmenu e adiciona a função que observa o clique fora dele.
  dropdownMenuActive(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao Dropdownmenu.
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.dropdownMenuActive);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
