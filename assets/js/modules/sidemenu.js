function updateTabcontent(tabcontents) {
    tabcontents.forEach(tab => tab.classList.remove("tabcontent_active"));
}

export function activeSidemenu() {
    const links = document.querySelectorAll(".sidemenu-section__list a");
    const tabcontents = document.querySelectorAll("[data-tabcontent]");

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