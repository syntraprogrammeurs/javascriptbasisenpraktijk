// Functie om te controleren of een getal een priemgetal is
function isPrime(n) {
    if (n <= 1) return false; // Getallen kleiner dan 2 zijn geen priemgetallen
    for (let i = 2; i <= Math.sqrt(n); i++) { // Loop door mogelijke delers tot de vierkantswortel van n
        if (n % i === 0) return false; // Als n deelbaar is door i, is het geen priemgetal
    }
    return true; // Als geen enkele deler is gevonden, is het een priemgetal
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    // Roep de functie aan en sla de resultaten op
    const result7 = isPrime(7);  // Verwachte Output: true
    const result10 = isPrime(10); // Verwachte Output: false
    // Toon de resultaten in het output-vak in de HTML
    outputDiv.innerHTML = `Output:<br>isPrime(7): ${result7}<br>isPrime(10): ${result10}`;
});
