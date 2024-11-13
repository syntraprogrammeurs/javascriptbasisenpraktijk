let maxGarageSize = 0; // Maximale capaciteit van de garage
let currentCarCount = 0; // Huidig aantal auto's in de garage

// Event listener voor het instellen van de garagegrootte
document.getElementById("garageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    maxGarageSize = parseInt(document.getElementById("garageSize").value);
    currentCarCount = 0; // Reset het aantal auto's bij een nieuwe grootte-instelling
    updateProgressBar();
    alert(`De garage is ingesteld voor maximaal ${maxGarageSize} auto's.`);
    document.getElementById("garageForm").reset();
});

// Event listener voor het toevoegen van een nieuwe auto
document.getElementById("autoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Controleer of de garage vol is
    if (currentCarCount >= maxGarageSize) {
        alert("De garage is vol. Er kunnen geen auto's meer worden toegevoegd.");
        return;
    }

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

    // Update het aantal auto's in de garage
    currentCarCount++;
    updateProgressBar();

    // Formulier resetten na toevoegen
    document.getElementById("autoForm").reset();
});

// Functie om de progressbar bij te werken
function updateProgressBar() {
    const progress = Math.min((currentCarCount / maxGarageSize) * 100, 100); // Zorg dat het niet over 100% gaat
    const progressBar = document.getElementById("garageProgress");
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.textContent = `${currentCarCount} / ${maxGarageSize} (${Math.round(progress)}%)`;
    progressBar.classList.toggle("bg-danger", currentCarCount === maxGarageSize); // Rode kleur als de garage vol is
}

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
