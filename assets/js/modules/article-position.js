export function articlePosition() {
    const imagens = document.querySelectorAll("#odd .article__image");

    imagens.forEach((image) => {
        image.classList.add("odd");
    })
}