// Event listener voor het invoerveld om het aantal tekens te tellen
document.getElementById("invoerVeld").addEventListener("input", function(event) {
    const tekenAantal = event.target.value.length;
    document.getElementById("tekenTeller").textContent = "Tekens ingevoerd: " + tekenAantal;
});
