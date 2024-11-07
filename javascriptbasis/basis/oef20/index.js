// Functie om een willekeurig wachtwoord te genereren
function genereerWachtwoord(lengte) {
    const karakters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let wachtwoord = ""; // Start met een lege string voor het wachtwoord
    for (let i = 0; i < lengte; i++) {
        const randomIndex = Math.floor(Math.random() * karakters.length); // Kies een willekeurige index
        wachtwoord += karakters[randomIndex]; // Voeg het willekeurige karakter toe aan wachtwoord
    }
    return wachtwoord; // Geef het gegenereerde wachtwoord terug
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    // Roep de functie aan met een voorbeeldlengte van 8
    const result = genereerWachtwoord(8);
    // Toon het resultaat in het output-vak in de HTML
    outputDiv.innerHTML = `Output:<br>genereerWachtwoord(8): ${result}`;
});
