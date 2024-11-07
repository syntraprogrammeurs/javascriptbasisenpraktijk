// Functie om het faculteit van een getal n te berekenen
function factorial(n) {
    let resultaat = 1; // Start met een resultaat van 1
    for (let i = 1; i <= n; i++) { // Loop door alle getallen van 1 tot en met n
        resultaat *= i; // Vermenigvuldig elk getal met het resultaat
    }
    return resultaat; // Geef het berekende faculteit terug
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    // Zoek het output-vak in de HTML
    const outputDiv = document.getElementById("output");
    // Roep de functie aan met 5 als argument en sla het resultaat op in 'result'
    const result = factorial(5); // Verwachte Output: 120
    // Toon het resultaat in het output-vak in de HTML
    outputDiv.innerHTML = `Output:<br>factorial(5): ${result}`;
});
