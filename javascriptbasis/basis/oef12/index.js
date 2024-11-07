// Definieer de functie
function begroet(naam) {
    return `Hallo, ${naam}!`;
}

// Voeg event listener toe aan de knop
document.getElementById('runButton').addEventListener('click', function() {
    const result = begroet("Jan");
    document.getElementById('output').textContent = `Output: ${result}`;
});
