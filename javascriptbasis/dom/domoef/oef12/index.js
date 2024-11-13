// Functie om het huidige tijdstip bij te werken
function updateTijd() {
    const nu = new Date();
    const tijdString = nu.toLocaleTimeString();
    document.getElementById("tijdKoptekst").textContent = "Huidige tijd: " + tijdString;
}

// Bijwerken elke seconde
setInterval(updateTijd, 1000);
