// INICIO - NAVEGAÇÃO POR TAB
export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // Ativa o tab de acordo com o index do mesmo.
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // adiciona os eventos nas tabs.
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    // O "if" irá verificar se há conteúdo (length) nas variáveis tabMenu e tabContent. Pois na reutilização, pode não haver section.
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar o primeiro item.
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
