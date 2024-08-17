export function asideBackground() {
    const links = document.querySelectorAll("#aside-list a");
    const main = document.querySelector(".main");

    function updateLinksStyles() {
        const mainHeight = main.offsetHeight;

        links.forEach((link) => {
            if (window.scrollY > mainHeight / 2) {
                link.classList.add("active-aside_link");
            } else {
                link.classList.remove("active-aside_link");
            }
        })
    }


    window.addEventListener("scroll", updateLinksStyles);

}