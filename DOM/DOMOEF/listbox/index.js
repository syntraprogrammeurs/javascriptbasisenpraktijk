// JavaScript voor overdracht naar rechts en links

// Knoppen en listboxen selecteren
const listbox1 = document.getElementById('listbox1');
const listbox2 = document.getElementById('listbox2');
const toRightBtn = document.getElementById('toRight');
const toLeftBtn = document.getElementById('toLeft');

// Functie om geselecteerde opties te verplaatsen
function moveSelected(fromListbox, toListbox) { // Definieer een functie die opties verplaatst van één listbox naar een andere
    var selectedOptions = Array.from(fromListbox.selectedOptions); // Maak een array van de geselecteerde opties in de bron-listbox
    selectedOptions.forEach(function(option) { // Itereer over elke geselecteerde optie
        toListbox.appendChild(option); // Voeg de optie toe aan de doel-listbox en verwijder deze uit de bron-listbox
    });
}

// function moveSelected(fromListbox, toListbox) {
//     const selectedOptions = Array.from(fromListbox.selectedOptions);
//     selectedOptions.forEach(option => {
//         // Voeg de optie toe aan de doel-listbox
//         toListbox.appendChild(option);
//     });
// }


// Event listeners voor de knoppen
toRightBtn.addEventListener('click', function() {
    moveSelected(listbox1, listbox2);
});

toLeftBtn.addEventListener('click', function() {
    moveSelected(listbox2, listbox1);
});

// Event listeners voor de knoppen
// toRightBtn.addEventListener('click', () => moveSelected(listbox1, listbox2));
// toLeftBtn.addEventListener('click', () => moveSelected(listbox2, listbox1));






















// Functie om geselecteerde opties te verplaatsen


