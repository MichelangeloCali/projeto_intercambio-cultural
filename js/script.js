import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchNumbers from "./modules/animationApi.js";
import fetchBitcoin from "./modules/bitcoinApi.js";
import AnimaScroll from "./modules/animeScroll.js";
import initDropdownMenu from "./modules/menuDropdown.js";
import initMenuMobile from "./modules/menuMobile.js";
import initOperation from "./modules/funcionamento.js";

// SCROLL SUAVE
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// FAQ - ACCORDION
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

// INICIO - NAVEGAÇÃO POR TAB
const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

// Modal Login
const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

// Tooltip para informações com movimento do mouse.
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

// animação números animais com API Fetch.
fetchNumbers("../../animationApi.json", ".numeros-grid");

// API externa Bitcoin.
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

// ANIMAÇÃO SCROLL
const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

// Dropdown para menus
initDropdownMenu();

// Menu mobile
initMenuMobile();

// Horario de funcionamento
initOperation();
