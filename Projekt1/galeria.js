function toggleMenu() {
    document.getElementById("menu").classList.toggle("pokaz");
}

const modal = document.getElementById("modal-foto");
const modalImg = document.getElementById("modal-img");

// Kliknięcie w zdjęcie otwiera powiększenie
document.querySelectorAll(".foto-karta").forEach(function (karta) {
    karta.addEventListener("click", function () {
        const img = karta.querySelector("img");
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.add("pokaz");
    });
});

// Zamykanie: kliknięcie w tło lub Escape
modal.addEventListener("click", function () {
    modal.classList.remove("pokaz");
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") modal.classList.remove("pokaz");
});
