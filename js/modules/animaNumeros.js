// Numbers
export default class AnimationNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Bind o this do objeto ao callback da mutação.
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM com número em seu texto. Incrementa a partir de 0 até o número final.
  static addNumbers(number) {
    const total = +number.innerText;
    const add = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += add;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa addNumbers para cada número selecionado do DOM.
  animaNumbers() {
    this.numbers.forEach((number) => this.constructor.addNumbers(number));
  }

  // Função que ocorre quando a Mutação ocorrer.
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe "ativo" é adicionada ao element target.
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
