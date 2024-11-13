// Array van citaten
const citaten = [
    "Het leven is wat er gebeurt terwijl je andere plannen maakt.",
    "De enige manier om geweldig werk te doen, is door te houden van wat je doet.",
    "Succes is niet het sleutel tot geluk, geluk is de sleutel tot succes.",
    "Wees de verandering die je in de wereld wilt zien."
];

// Event listener voor de knop om een willekeurig citaat weer te geven
document.getElementById("toonCitaatBtn").addEventListener("click", function() {
    const willekeurigCitaat = citaten[Math.floor(Math.random() * citaten.length)];
    document.getElementById("citaatDisplay").textContent = willekeurigCitaat;
});
