// Event listener voor de knop om het aantal lijstitems te tellen
document.getElementById("telItemsBtn").addEventListener("click", function() {
    const lijstItems = document.querySelectorAll("#mijnLijst li");
    const aantalItems = lijstItems.length;
    document.getElementById("itemTeller").textContent = "Aantal items: " + aantalItems;
});
