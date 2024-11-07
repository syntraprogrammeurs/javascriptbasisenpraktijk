// Event listener voor het invoerveld
document.getElementById("invoerVeld").addEventListener("input", function(event) {
    // Haal de huidige waarde uit het invoerveld op
    const huidigeInvoer = event.target.value;
    console.log("Invoer: " + huidigeInvoer); // Log de huidige invoer
    document.getElementById("output").textContent = "Invoer: " + huidigeInvoer; // Update het outputvak
});
