function createCarousel(carouselItems, bullets, interval = 3000) {
    let currentIndex = 0;
    let autoSlide;

    const showSlide = (index) => {
        carouselItems.forEach((item, i) => {
            item.style.opacity = i === index ? 1 : 0;
        })

        bullets.forEach((bullet, i) => {
            bullet.classList.toggle("active-bullet", i == index);
        })

        currentIndex = index;
    }

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(nextIndex);
    }

    const startAutoSlide = () => {
        autoSlide = setInterval(nextSlide, interval);
    }

    const stopAutoSlide = () => {
        clearInterval(autoSlide);
    }

    // Configura os eventos de clique de cada bullet
    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        })
    })

    showSlide(currentIndex);
    startAutoSlide();
}

export function carouselReviews() {
    const carouselItem = document.querySelectorAll("[data-review]");
    const bullets = document.querySelectorAll("[data-bullet-review]");
    createCarousel(carouselItem, bullets);

}

export function carouselImages() {
    const imagens = document.querySelectorAll("[data-image]");
    const bullets = document.querySelectorAll("[data-bullet-img]");

    createCarousel(imagens, bullets);
}