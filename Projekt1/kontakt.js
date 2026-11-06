function toggleMenu() {
    document.getElementById("menu").classList.toggle("pokaz");
}

const formularz = document.getElementById("formularz-kontaktowy");

// Wczytanie zapisanego adresu e-mail z localStorage
const zapisanyEmail = localStorage.getItem("uzytkownik_email");
if (zapisanyEmail) {
    document.getElementById("email").value = zapisanyEmail;
}

formularz.addEventListener("submit", function (e) {
    e.preventDefault();

    // Pobieramy wpisane wartości
    const email = document.getElementById("email").value.trim();
    const temat = document.getElementById("temat").value;
    const wiadomosc = document.getElementById("wiadomosc").value.trim();

    // Zakładamy, że formularz jest poprawny
    let poprawny = true;

    // 1. Sprawdzamy email
    if (email === "" || !email.includes("@")) {
        document.getElementById("error-email").textContent = "Podaj poprawny adres e-mail!";
        document.getElementById("email").classList.add("pole-blad");
        poprawny = false;
    } else {
        document.getElementById("error-email").textContent = "";
        document.getElementById("email").classList.remove("pole-blad");
    }

    // 2. Sprawdzamy temat
    if (temat === "") {
        document.getElementById("error-temat").textContent = "Wybierz temat wiadomości!";
        document.getElementById("temat").classList.add("pole-blad");
        poprawny = false;
    } else {
        document.getElementById("error-temat").textContent = "";
        document.getElementById("temat").classList.remove("pole-blad");
    }

    // 3. Sprawdzamy treść wiadomości
    if (wiadomosc.length < 10) {
        document.getElementById("error-wiadomosc").textContent = "Wiadomość musi mieć min. 10 znaków!";
        document.getElementById("wiadomosc").classList.add("pole-blad");
        poprawny = false;
    } else {
        document.getElementById("error-wiadomosc").textContent = "";
        document.getElementById("wiadomosc").classList.remove("pole-blad");
    }

    // 4. Jeśli wszystko jest poprawne – pokazujemy komunikat o sukcesie
    if (poprawny) {
        localStorage.setItem("uzytkownik_email", email);
        document.getElementById("sukces-komunikat").style.display = "block";
        formularz.reset();
    } else {
        document.getElementById("sukces-komunikat").style.display = "none";
    }
});

// Czyszczenie błędu, gdy użytkownik zaczyna poprawiać pole
document.getElementById("email").addEventListener("input", function () {
    this.classList.remove("pole-blad");
    document.getElementById("error-email").textContent = "";
});

document.getElementById("temat").addEventListener("change", function () {
    this.classList.remove("pole-blad");
    document.getElementById("error-temat").textContent = "";
});

document.getElementById("wiadomosc").addEventListener("input", function () {
    this.classList.remove("pole-blad");
    document.getElementById("error-wiadomosc").textContent = "";
});
