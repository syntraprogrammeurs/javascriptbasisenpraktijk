// Voeg een scroll event listener toe om de huidige scrollpositie in px te loggen
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY; // Haal de huidige scrollpositie op
    console.log("Scrollniveau: " + scrollPos + "px"); // Log de scrollpositie in pixels
    document.getElementById("output").textContent = "Scrollniveau: " + scrollPos + "px"; // Update het outputvak
});

// Voeg een extra functie toe aan de "Run" knop om het huidige scrollniveau direct te tonen
document.getElementById("runButton").addEventListener("click", function() {
    let scrollPos = window.scrollY;
    document.getElementById("output").textContent = "Scrollniveau: " + scrollPos + "px";
});
