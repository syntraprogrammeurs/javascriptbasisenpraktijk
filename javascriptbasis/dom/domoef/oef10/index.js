// Event listeners voor het veranderen van de tekstkleur bij hover
const tekstElement = document.getElementById("hoverTekst");

tekstElement.addEventListener("mouseenter", function() {
    tekstElement.style.color = "blue";
});

tekstElement.addEventListener("mouseleave", function() {
    tekstElement.style.color = "black";
});
