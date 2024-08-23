export function openFaq() {
    const dtList = document.querySelectorAll(".faq__list dt");
    const ddList = document.querySelectorAll(".faq__list dd");

    if (!dtList.length < !ddList.length) return

    function open(ev) {
        const relatedDd = ev.currentTarget.nextElementSibling;

        if (relatedDd && relatedDd.tagName.toLowerCase() === "dd") {
            const isActive = relatedDd.classList.contains("active-dd");

            ddList.forEach(dd => dd.classList.remove("active-dd"));

            if (!isActive) {
                relatedDd.classList.add("active-dd");
            }
        }
    }

    dtList.forEach(dt => dt.addEventListener("click", open));
}