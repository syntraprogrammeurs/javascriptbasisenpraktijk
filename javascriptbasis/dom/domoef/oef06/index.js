// Event listener voor de knop om de tekstinhoud van twee elementen om te wisselen
document.getElementById("omwisselTekstBtn").addEventListener("click", function() {
    const element1 = document.getElementById("element1");
    const element2 = document.getElementById("element2");
    const tempText = element1.textContent;
    element1.textContent = element2.textContent;
    element2.textContent = tempText;
});
