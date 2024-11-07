// Functie om het aantal woorden in een zin te tellen
function telWoorden(zin) {
    return zin.split(" ").length; // Split de zin op spaties en tel het aantal woorden
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    // Roep de functie aan en sla het resultaat op
    const result = telWoorden("Dit is een voorbeeldzin."); // Verwachte Output: 4
    // Toon het resultaat in het output-vak in de HTML
    outputDiv.innerHTML = `Output:<br>telWoorden("Dit is een voorbeeldzin."): ${result}`;
});
