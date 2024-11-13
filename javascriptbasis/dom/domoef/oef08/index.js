// Event listener voor de knop om een verborgen paragraaf zichtbaar te maken
document.getElementById("toonParagraafBtn").addEventListener("click", function() {
    const paragraaf = document.getElementById("verborgenParagraaf");
    paragraaf.style.display = "block";
});
