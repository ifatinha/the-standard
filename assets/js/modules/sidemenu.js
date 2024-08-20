function updateTabcontent(tabcontents) {
    tabcontents.forEach(tab => tab.classList.remove("tabcontent_active"));
}

function activeSidemenu(links, tabcontents) {

    function updateTabContent(link, index) {
        links.forEach(link => link.classList.remove("sidemenu-active"));
        updateTabcontent(tabcontents);
        link.classList.add("sidemenu-active");
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

    activeSidemenu(links, tabcontents);
}

export function activeOffersTab() {
    const links = document.querySelectorAll("#offers-list a");
    const tabcontents = document.querySelectorAll("[data-offers]");

    activeSidemenu(links, tabcontents);
}