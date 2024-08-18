import { openDropdownHeader, openDropdownModal } from './modules/dropdown.js';
import { initializeMenu } from "./modules/menu.js";
import { asideBackground } from "./modules/aside.js";
import { getLocalHour } from "./modules/getTime.js";

document.addEventListener("DOMContentLoaded", () => {
    openDropdownHeader();
    openDropdownModal();
    initializeMenu();
    asideBackground();
    setInterval(getLocalHour, 1000);
})