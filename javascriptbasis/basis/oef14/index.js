// Functie om te controleren of een getal even is
function isEven(getal) {
    return getal % 2 === 0;
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    const result6 = isEven(6); // Verwachte Output: true
    const result7 = isEven(7); // Verwachte Output: false
    outputDiv.innerHTML = `Output:<br>isEven(6): ${result6}<br>isEven(7): ${result7}`;
});
