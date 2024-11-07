// Functie om twee getallen op te tellen
function telOp(a, b) {
    return a + b;
}

// Run knop functionaliteit
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("runButton").addEventListener("click", function () {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = "Output: " + telOp(5, 3); // Output "8" in het vak
    });
});
