// Voeg een mouseover event toe aan de tekst die een bericht in de console logt en in het output-vak toont
document.getElementById("hoverText").addEventListener("mouseover", function() {
    console.log("Je beweegt over de tekst!"); // Logt het bericht naar de console
    document.getElementById("output").textContent = "Je beweegt over de tekst!";
});

// Event listener voor de "Run" knop om mouseover te simuleren
document.getElementById("runButton").addEventListener("click", function() {
    document.getElementById("hoverText").dispatchEvent(new Event("mouseover"));
});
