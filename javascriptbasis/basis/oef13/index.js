// Functie om een getal te kwadrateren
function vierkant(getal) {
    return getal * getal;
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `Output: ${vierkant(4)}`; // Verwachte Output: 16
});
