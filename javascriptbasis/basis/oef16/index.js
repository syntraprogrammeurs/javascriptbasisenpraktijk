// Functie om alle klinkers in een string te vervangen door het teken *
function vervangKlinkers(tekst) {
    // Gebruik een reguliere expressie om alle klinkers (zowel kleine als hoofdletters) te vinden en te vervangen door '*'
    return tekst.replace(/[aeiouAEIOU]/g, '*');
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    // Zoek het output-vak in de HTML
    const outputDiv = document.getElementById("output");
    // Roep de functie aan met "Hallo Wereld" als argument en sla het resultaat op in 'result'
    const result = vervangKlinkers("Hallo Wereld"); // Verwachte Output: "H*ll* W*r*ld"
    // Toon het resultaat in het output-vak in de HTML
    outputDiv.innerHTML = `Output:<br>vervangKlinkers("Hallo Wereld"): ${result}`;
});
