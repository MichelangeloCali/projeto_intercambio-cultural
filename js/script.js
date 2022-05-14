import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchNumbers from "./modules/animationApi.js";
import fetchBitcoin from "./modules/bitcoinApi.js";
import AnimaScroll from "./modules/animeScroll.js";
import DropdownMenu from "./modules/menuDropdown.js";
import MenuMobile from "./modules/menuMobile.js";
import Operation from "./modules/funcionamento.js";

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
fetchNumbers("./animationApi.json", ".numeros-grid");

// API externa Bitcoin.
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

// ANIMAÇÃO SCROLL
const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

// Dropdown para menus
const dropDropdownMenu = new DropdownMenu("[data-dropdown] > a");
dropDropdownMenu.init();

// Menu mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// Horario de funcionamento
const operation = new Operation("[data-semana]", "aberto");
operation.init();
