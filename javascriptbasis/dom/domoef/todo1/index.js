function VoegToeAanLijst() {
    // Haal de waarde van het invoerveld op
    let invoer = document.getElementById("invoer").value;
    let lijst = document.getElementById("lijst");

    // Maak een nieuw li-element aan
    let nieuwElement = document.createElement("li");
    nieuwElement.classList.add("p-2", "bg-light", "rounded-pill", "shadow-sm", "mb-2", "fs-1", "d-flex", "align-items-center");

    // Voeg de tekst toe aan het item
    let itemText = document.createElement("span");
    itemText.textContent = invoer;
    itemText.classList.add("me-auto"); // Zorgt ervoor dat de tekst links blijft staan
    nieuwElement.appendChild(itemText);

    // Voeg het trash-icon toe en gebruik "me-3" om ruimte te creëren tussen de iconen
    let trashIcon = document.createElement("span");
    trashIcon.innerHTML = '<i class="bi bi-trash"></i>';
    trashIcon.classList.add("btn", "text-danger", "fs-1", "cursor-pointer", "me-3");
    nieuwElement.appendChild(trashIcon);

    // Voeg een event listener toe om dit specifieke item te verwijderen
    trashIcon.addEventListener("click", function () {
        nieuwElement.remove();
    });

    // Voeg de checkbox toe aan de rechterkant, na het trash-icon
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "fs-1");

    // Voeg een event listener toe aan de checkbox om de tekst te doorstrepen
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            itemText.classList.add("text-decoration-line-through");
        } else {
            itemText.classList.remove("text-decoration-line-through");
        }
    });

    nieuwElement.appendChild(checkbox);

    // Voeg het nieuwe li-element toe aan de lijst
    lijst.appendChild(nieuwElement);

    // Wis het invoerveld na het toevoegen
    document.getElementById("invoer").value = "";
}

// Event listener voor de "Toevoegen" knop
let knop = document.getElementById("toevoegen");
knop.addEventListener("click", VoegToeAanLijst);

// Event listener voor de "Verwijder alles" knop
let verwijderAllesKnop = document.querySelector(".btn-danger");
verwijderAllesKnop.addEventListener("click", function () {
    let ul = document.getElementById("lijst");
    ul.innerHTML = ""; // Verwijdert alle <li> elementen in de lijst
});
