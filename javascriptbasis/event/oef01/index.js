// Voeg een click event toe aan de knop en log een bericht naar de console
document.getElementById("clickButton").addEventListener("click", function() {
    console.log("Knop is geklikt!"); // Logt "Knop is geklikt!" naar de console
    document.getElementById("output").textContent = "Knop is geklikt!";
});

// Event listener voor de "Run" knop om output te tonen
document.getElementById("runButton").addEventListener("click", function() {
    document.getElementById("clickButton").click(); // Simuleer de klik van de knop
});
