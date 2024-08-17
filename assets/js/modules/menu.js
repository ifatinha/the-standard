export const initializeMenu = () => {
    const buttonBugger = document.querySelector("#menu-bugger");
    // const buttonModalClose = document.querySelector("#modal-close");
    // const modalMenu = document.querySelector("#modal-menu");

    if (!buttonBugger) return;

    const updateAriaAtributes = (isOpen) => {
        buttonBugger.setAttribute("aria-expanded", true);
        buttonBugger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    };

    const toggleClass = (element, className) => {
        element.classList.toggle(className);
    };

    // const toggleModal = (event) => {
    //     if (event?.type === "touchstart") event.preventDefault();

    //     const isOpenModal = modalMenu.classList.contains("modal-overlay-open");

    //     if (isOpenModal) {
    //         buttonBugger.classList.remove("menu-open");
    //     }

    //     toggleClass(modalMenu, "modal-overlay-open");

    // };

    const toggleMenu = (event) => {
        if (event?.type === "touchstart") event.preventDefault();

        toggleClass(buttonBugger, "menu-open");
        // toggleModal();

        // const isOpen = modalMenu.classList.contains("modal-overlay-open");
        // updateAriaAtributes(isOpen);
    }

    buttonBugger.addEventListener("click", toggleMenu);
    buttonBugger.addEventListener("touchstart", toggleMenu);
    // buttonModalClose.addEventListener("click", toggleModal);
    // buttonModalClose.addEventListener("touchstart", toggleModal);
};

export default initializeMenu;