// Variabele om het aantal klikken bij te houden
let klikAantal = 0; // Start met 0 klikken

// Voeg een click event listener toe aan de knop
document.getElementById("klikKnop").addEventListener("click", function() {
    klikAantal++; // Verhoog het aantal klikken
    console.log("Knop geklikt: " + klikAantal + " keer"); // Log het aantal klikken
    document.getElementById("output").textContent = "Knop geklikt: " + klikAantal + " keer"; // Update het outputvak
});
