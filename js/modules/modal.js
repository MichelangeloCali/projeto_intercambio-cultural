// Modal Login
export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = "ativo";

    // bind this ao callback para fazer referência ao objeto da classe.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  // abre e fecha o modal.
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  // adiciona o evento de toggle ao modal.
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha ao modal ao clicar fora do mesmo.
  clickOutside(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // adiciona os eventos aos elementos do modal.
  addModalEvents() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutside);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
