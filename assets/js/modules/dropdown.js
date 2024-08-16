export function openDropdown() {
    const dropdown = document.querySelector("#dropdown-list");
    const buttonDropdown = document.querySelector("#button-dropdown");

    function toggleDropdown() {
        dropdown.classList.toggle("open-dropdown");
    }

    if (dropdown && buttonDropdown) {
        buttonDropdown.addEventListener("click", toggleDropdown);
    }
}