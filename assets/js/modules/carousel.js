export function carousel() {

    const carouselItem = document.querySelectorAll("[data-carousel]");
    const bullets = document.querySelectorAll("[data-bullet]");
    let lastIndex = 0;
    const interval = 3000;

    // Inicializa o primeiro slide visivel
    carouselItem[0].style.opacity = 1;

    function updateSlide(index) {
        const lastItem = carouselItem[lastIndex];
        const actualItem = carouselItem[index];

        lastItem.style.opacity = 0;
        actualItem.style.opacity = 1;

        lastIndex = index;
    }

    function updateBullets(index) {
        bullets.forEach((item, i) => {
            item.classList.toggle("active-bullet", i == index);
        })
    }

    function nextSlide() {
        const nextIndex = (lastIndex + 1) % carouselItem.length
        updateSlide(nextIndex);
        updateBullets(nextIndex);
    }

    // Configura os eventos de clique de cada bullet
    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
            updateSlide(index);
            updateBullets(index);

            //Reinicia o intervalo quando o usuário clica
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, interval);
        })
    })

    let autoSlide = setInterval(nextSlide, interval);
}

carousel();