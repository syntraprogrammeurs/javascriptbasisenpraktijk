// Event listener voor het tonen van het type toets
document.addEventListener("keydown", function(event) {
    // Haal het type van de ingedrukte toets op
    const toetsType = event.key;
    console.log("Toets ingedrukt: " + toetsType); // Log het type van de toets
    document.getElementById("output").textContent = "Toets ingedrukt: " + toetsType; // Toon de toets in het outputvak
});
