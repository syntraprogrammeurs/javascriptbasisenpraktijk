// Selecteer het invoerveld
const inputField = document.getElementById("inputField");

// Voeg een focus event toe dat in de console logt wanneer het invoerveld geselecteerd is
inputField.addEventListener("focus", function() {
    console.log("Invoerveld gefocust"); // Log "Invoerveld gefocust" bij focus
    document.getElementById("output").textContent = "Invoerveld gefocust";
});

// Voeg een blur event toe dat in de console logt wanneer het invoerveld verlaten wordt
inputField.addEventListener("blur", function() {
    console.log("Invoerveld verlaten"); // Log "Invoerveld verlaten" bij blur
    document.getElementById("output").textContent = "Invoerveld verlaten";
});

// Voeg event listeners toe aan de "Run" knop om focus en blur te simuleren
document.getElementById("runButton").addEventListener("click", function() {
    inputField.focus(); // Activeer focus
    setTimeout(() => inputField.blur(), 1000); // Simuleer blur na 1 seconde
});
