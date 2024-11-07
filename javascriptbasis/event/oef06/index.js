// Voeg een click event toe aan de pagina die de klikpositie (x, y) in de console logt
document.addEventListener("click", function(event) {
    const x = event.clientX; // x-coördinaat van de klik
    const y = event.clientY; // y-coördinaat van de klik
    console.log(`Klikpositie: x=${x}, y=${y}`);
    document.getElementById("output").textContent = `Klikpositie: x=${x}, y=${y}`;
});

// Event listener voor de "Run" knop om een klikpositie te simuleren in het midden van de pagina
document.getElementById("runButton").addEventListener("click", function() {
    const simulatedX = window.innerWidth / 2;
    const simulatedY = window.innerHeight / 2;
    console.log(`Klikpositie: x=${simulatedX}, y=${simulatedY}`);
    document.getElementById("output").textContent = `Klikpositie: x=${simulatedX}, y=${simulatedY}`;
});
