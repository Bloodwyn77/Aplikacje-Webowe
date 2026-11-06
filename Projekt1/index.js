function toggleMenu() {
    document.getElementById("menu").classList.toggle("pokaz");
}

function odswiezCzas() {
    document.getElementById("zegar").textContent = new Date().toLocaleTimeString("pl-PL");
}

odswiezCzas();
setInterval(odswiezCzas, 1000);