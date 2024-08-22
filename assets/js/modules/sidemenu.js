function updateTabcontent(tabcontents) {
    tabcontents.forEach(tab => tab.classList.remove("tabcontent_active"));
}

function activeSidemenu(links, tabcontents, classButton) {

    function updateTabContent(link, index) {
        links.forEach(link => link.classList.remove(classButton));
        updateTabcontent(tabcontents);
        link.classList.add(classButton);
        tabcontents[index].classList.add("tabcontent_active");
    }

    if (links.length > 0 && tabcontents.length > 0) {
        updateTabContent(links[0], 0);
    }

    links.forEach((link, index) => {
        link.addEventListener("click", (ev) => {
            ev.preventDefault();
            updateTabContent(link, index);
        });
    })
}

export function activeVillageTab() {
    const links = document.querySelectorAll("#villages-list a");
    const tabcontents = document.querySelectorAll("[data-villages]");

    activeSidemenu(links, tabcontents, "sidemenu-active");
}

export function activeOffersTab() {
    const links = document.querySelectorAll("#offers-list a");
    const tabcontents = document.querySelectorAll("[data-offers]");

    activeSidemenu(links, tabcontents, "sidemenu-active");
}

export function activeSpaTab() {
    const links = document.querySelectorAll("#spa-list a");
    const tabcontents = document.querySelectorAll("[data-spa]");

    activeSidemenu(links, tabcontents, "yellow-button-active");
}