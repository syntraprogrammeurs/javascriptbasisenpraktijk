// Voeg een double-click event toe aan de div en verander de achtergrondkleur naar lichtblauw
document.getElementById("colorBox").addEventListener("dblclick", function() {
    // Verander de achtergrondkleur van de div
    document.getElementById("colorBox").style.backgroundColor = "lightblue";
    // Log een bericht naar de console
    console.log("Achtergrondkleur veranderd!");
    // Toon het bericht in het output-vak
    document.getElementById("output").textContent = "Achtergrondkleur veranderd!";
});

// Event listener voor de "Run" knop om double-click te simuleren
document.getElementById("runButton").addEventListener("click", function() {
    document.getElementById("colorBox").dispatchEvent(new Event("dblclick"));
});
