//Invoerveld Placeholder VeranderenMaak een functie die de placeholder-tekst in een invoerveld verandert naar "Type hier je tekst..." wanneer een knop wordt ingedrukt.

document.getElementById("veranderPlaceholderBtn").addEventListener("click", function() {
    document.getElementById("invoerVeld").placeholder = "Type hier je tekst...";
});
