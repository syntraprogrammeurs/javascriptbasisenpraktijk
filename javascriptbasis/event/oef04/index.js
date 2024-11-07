// Voeg een mouseout event toe aan de tekst die een bericht in de console logt en in het output-vak toont
document.getElementById("mouseoutText").addEventListener("mouseout", function() {
    console.log("Bedankt voor je bezoek!"); // Logt het bericht naar de console
    document.getElementById("output").textContent = "Bedankt voor je bezoek!";
});

// Event listener voor de "Run" knop om mouseout te simuleren
document.getElementById("runButton").addEventListener("click", function() {
    document.getElementById("mouseoutText").dispatchEvent(new Event("mouseout"));
});
