// Event listener voor de knop om een nieuwe paragraaf toe te voegen
document.getElementById("voegParagraafToeBtn").addEventListener("click", function() {
    const nieuweParagraaf = document.createElement("p");
    nieuweParagraaf.textContent = "Dit is een nieuw element";
    document.getElementById("paragraafContainer").appendChild(nieuweParagraaf);
});
