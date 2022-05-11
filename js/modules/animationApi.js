// API Fetch números viagens utilizando Async
import AnimationNumbers from "./animaNumeros.js";

export default function fetchNumbers(url, target) {
  // Cria a div contendo informações com o total de viagens.
  function createViagem(viagem) {
    const div = document.createElement("div");
    div.classList.add("numero-viagem");
    div.innerHTML = `<h3>${viagem.viagem}</h3><span data-numero>${viagem.total}</span>`;
    return div;
  }

  // Adiciona os lugares no DOM.
  const numerosGrid = document.querySelector(target);
  function addViagens(viagem) {
    const divLugar = createViagem(viagem);
    numerosGrid.appendChild(divLugar);
  }

  // Anima os números de cada cidade (lugares).
  function animaLugares() {
    const animaNumeros = new AnimationNumbers(
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    animaNumeros.init();
  }

  // Puxa os números totais de viagens através de um arquivo JSON.
  async function fetchViagens() {
    try {
      // Fetch e espera a resposta e transforma em json.
      const viagensResponse = await fetch(url);
      const viagensJSON = await viagensResponse.json();

      // Após a transformação do json, ativa as funções para adicionar e animar os números.
      viagensJSON.forEach((viagem) => addViagens(viagem));
      animaLugares();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchViagens();
}
