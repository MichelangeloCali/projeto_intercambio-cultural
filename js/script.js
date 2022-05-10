import ScrollSuave from "./modules/scrollSuave.js";
import initTabNav from "./modules/tabNav.js";
import initAccordion from "./modules/accordion.js";
import initAnimaScroll from "./modules/animeScroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/menuDropdown.js";
import initMenuMobile from "./modules/menuMobile.js";
import initOperation from "./modules/funcionamento.js";
import initFetchNumbers from "./modules/animationApi.js";
import initFetchBitcoin from "./modules/bitcoinApi.js";

// SCROLL SUAVE
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// INICIO - NAVEGAÇÃO POR TAB
initTabNav();

// FAQ - ACCORDION
initAccordion();

// ANIMAÇÃO SCROLL
initAnimaScroll();

// Modal Login
initModal();

// Tooltip para informações com movimento do mouse.
initTooltip();

// Dropdown para menus
initDropdownMenu();

// Menu mobile
initMenuMobile();

// Horario de funcionamento
initOperation();

// animação números animais com API Fetch.
initFetchNumbers();

// API externa Bitcoin.
initFetchBitcoin();
