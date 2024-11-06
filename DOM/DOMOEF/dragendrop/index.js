// Functie voor drag-and-drop functionaliteit
function enableDragAndDrop(listbox) {
    listbox.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.textContent); // Opslaan van de tekst van het gesleepte item
        event.target.classList.add('dragging'); // Voeg een visuele indicator toe
    });

    listbox.addEventListener('dragend', function(event) {
        event.target.classList.remove('dragging'); // Verwijder de visuele indicator
    });

    listbox.addEventListener('dragover', function(event) {
        event.preventDefault(); // Laat het dropevent toe
    });

    listbox.addEventListener('drop', function(event) {
        event.preventDefault();
        const draggedText = event.dataTransfer.getData('text/plain'); // Haal de gesleepte tekst op
        const originListbox = document.querySelector('.dragging').parentNode; // Verkrijg de oorspronkelijke listbox
        const draggedItem = document.querySelector('.dragging'); // Het gesleepte item

        if (originListbox !== listbox) { // Controleer of het niet dezelfde listbox is
            listbox.appendChild(draggedItem); // Voeg een kopie toe aan de doel-listbox
        }
    });
}

// Initialiseer drag-and-drop functionaliteit voor beide listboxen
enableDragAndDrop(document.getElementById('listbox1'));
enableDragAndDrop(document.getElementById('listbox2'));