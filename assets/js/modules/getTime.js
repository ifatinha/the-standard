export function getLocalHour() {
    const time = document.querySelector("#time");
    const data = new Date();
    const horaAtual = data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    })

    time.textContent = horaAtual;
}