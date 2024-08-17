function toggleDropdown(element, className) {
    element.classList.toggle(className);
}

export function openDropdownHeader() {
    const dropdown = document.querySelector("#dropdown-list");
    const buttonDropdown = document.querySelector("#button-dropdown");

    if (dropdown && buttonDropdown) {
        buttonDropdown.addEventListener("click", () => {
            toggleDropdown(dropdown, "open-dropdown");
        });
    }
}

export function openDropdownModal() {
    const dropdown = document.querySelector("#modal-dropdown");
    const buttonDropdown = document.querySelector("#modal-dropdown-button");

    if (dropdown && buttonDropdown) {
        buttonDropdown.addEventListener("click", () => {
            toggleDropdown(dropdown, "modal__dropdown-open");
        });
    }
}