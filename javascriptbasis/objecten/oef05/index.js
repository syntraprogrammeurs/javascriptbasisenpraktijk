// Klasse Voertuig
class Voertuig {
    constructor(model, bouwjaar) {
        this.model = model;
        this.bouwjaar = bouwjaar;
    }

    rijden() {
        return `${this.model} is aan het rijden.`;
    }

    starten() {
        return `${this.model} is gestart.`;
    }

    stoppen() {
        return `${this.model} is gestopt.`;
    }
}

// Klasse Auto die overerft van Voertuig
class Auto extends Voertuig {
    constructor(model, bouwjaar, type, versnelling, aandrijving) {
        super(model, bouwjaar);
        this.type = type;
        this.versnelling = versnelling;
        this.aandrijving = aandrijving;
    }

    beschrijf() {
        return `Model: ${this.model}, Bouwjaar: ${this.bouwjaar}, Type: ${this.type}, Versnelling: ${this.versnelling}, Aandrijving: ${this.aandrijving}`;
    }
}

// Event listener voor het formulier
document.getElementById("autoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Haal de waarden op uit het formulier
    const model = document.getElementById("model").value;
    const bouwjaar = document.getElementById("bouwjaar").value;
    const type = document.getElementById("type").value;
    const versnelling = document.getElementById("versnelling").value;
    const aandrijving = document.getElementById("aandrijving").value;

    // Maak een nieuwe auto aan
    const nieuweAuto = new Auto(model, bouwjaar, type, versnelling, aandrijving);

    // Voeg de auto toe aan de lijst
    const autoList = document.getElementById("autoList");
    const autoItem = document.createElement("li");
    autoItem.classList.add("list-group-item");
    autoItem.textContent = nieuweAuto.beschrijf();
    autoList.appendChild(autoItem);

    // Formulier resetten na toevoegen
    document.getElementById("autoForm").reset();
});