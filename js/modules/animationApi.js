// API Fetch números viagens utilizando Async
import initAnimationNumbers from "./animaNumeros.js";

export default function initFetchNumbers() {
  function createViagem(viagem) {
    const div = document.createElement("div");
    div.classList.add("numero-viagem");
    div.innerHTML = `<h3>${viagem.viagem}</h3><span data-numero>${viagem.total}</span>`;
    return div;
  }

  async function fetchViagens(url) {
    try {
      const viagensResponse = await fetch(url);
      const viagensJSON = await viagensResponse.json();

      const numerosGrid = document.querySelector(".numeros-grid");
      viagensJSON.forEach((viagem) => {
        const divLugar = createViagem(viagem);
        numerosGrid.appendChild(divLugar);
      });
      initAnimationNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchViagens("./animationApi.json");
}
