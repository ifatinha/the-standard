import { openDropdownHeader, openDropdownModal } from './modules/dropdown.js';
import { initializeMenu } from "./modules/menu.js";
import { asideBackground } from "./modules/aside.js";
import { getLocalHour } from "./modules/getTime.js";
import { articlePosition } from "./modules/article-position.js";
import { carouselReviews, carouselImages } from "./modules/carousel.js";
import { activeVillageTab, activeOffersTab, activeSpaTab } from './modules/sidemenu.js';
import { openFaq } from './modules/faq.js';

document.addEventListener("DOMContentLoaded", () => {
    openDropdownHeader();
    openDropdownModal();
    initializeMenu();
    asideBackground();
    setInterval(getLocalHour, 1000);
    articlePosition();
    carouselReviews();
    carouselImages();
    activeVillageTab();
    activeOffersTab();
    activeSpaTab();
    openFaq();
})