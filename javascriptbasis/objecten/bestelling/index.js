// Definieer een klasse voor de Bestelling
class Bestelling {
    constructor(id, productNaam, klantNaam, status) {
        this.id = id;
        this.productNaam = productNaam;
        this.klantNaam = klantNaam;
        this.status = status;
    }

    // Methode om de bestelling te beschrijven
    beschrijf() {
        return `Product: ${this.productNaam}, Klant: ${this.klantNaam}`;
    }
}

// Variabelen voor bestellingenbeheer
let bestellingId = 1;
const bestellingen = {
    "In afwachting": [],
    "In behandeling": [],
    "Verzonden": []
};

// Selecteer de relevante DOM-elementen
const orderForm = document.getElementById("orderForm");
const pendingList = document.getElementById("pendingList");
const processingList = document.getElementById("processingList");
const shippedList = document.getElementById("shippedList");
const toastElement = new bootstrap.Toast(document.getElementById("orderToast"));
const toastBody = document.getElementById("toastBody");

// Functie om een bestelling toe te voegen aan de juiste status-tab
function voegBestellingToeAanTab(bestelling) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = bestelling.beschrijf();

    if (bestelling.status === "In afwachting") {
        pendingList.appendChild(listItem);
    } else if (bestelling.status === "In behandeling") {
        processingList.appendChild(listItem);
    } else if (bestelling.status === "Verzonden") {
        shippedList.appendChild(listItem);
    }
}

// Functie om de bestelling toe te voegen aan de lijst en een toast weer te geven
function voegNieuweBestellingToe(productNaam, klantNaam, status) {
    const nieuweBestelling = new Bestelling(bestellingId++, productNaam, klantNaam, status);
    bestellingen[status].push(nieuweBestelling);
    voegBestellingToeAanTab(nieuweBestelling);

    // Toon toast met de details van de nieuwe bestelling
    toastBody.textContent = `Nieuwe bestelling toegevoegd: ${nieuweBestelling.beschrijf()} - Status: ${status}`;
    toastElement.show();
}

// Event listener voor het orderformulier
orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Haal waarden op uit het formulier
    const productNaam = document.getElementById("productName").value;
    const klantNaam = document.getElementById("customerName").value;
    const status = document.getElementById("orderStatus").value;

    // Voeg de nieuwe bestelling toe
    voegNieuweBestellingToe(productNaam, klantNaam, status);

    // Formulier resetten na toevoegen
    orderForm.reset();
});
