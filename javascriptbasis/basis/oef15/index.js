// Functie om een string om te keren
function keerOm(tekst) {
    return tekst.split('').reverse().join('');
}

// Run-knop event listener
document.getElementById("runButton").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    const result = keerOm("JavaScript"); // Verwachte Output: "tpircSavaJ"
    outputDiv.innerHTML = `Output:<br>keerOm("JavaScript"): ${result}`;
});
