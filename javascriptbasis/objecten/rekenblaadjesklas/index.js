
function maakRandomGetal(digitsMin, digitsMax){
    //hoe laat ik nu de computer random digitsmin of digitsmax kiezen?
    let aantalDigits = Math.floor(Math.random() * (parseInt(digitsMax) - parseInt(digitsMin) + 1)) + parseInt(digitsMin);

    eenRandomGetal = Math.floor(Math.random()* (10**parseInt(aantalDigits)));
    return eenRandomGetal;
}


document.getElementById('toevoegen').addEventListener('click', function () {
    let digitsMin = document.getElementById('digits-min').value;
    let digitsMax = document.getElementById('digits-max').value;
    const aantalOef = document.getElementById('numQuestions').value;

    // Haal de exercise-container op
    const exerciseContainer = document.getElementById('exercise-container');

    // Maak de exercise-container leeg om nieuwe vragen toe te voegen
    exerciseContainer.innerHTML = '';

    for (let teller = 1; teller <= aantalOef; teller++) {
        let getal1 = maakRandomGetal(digitsMin, digitsMax);
        let getal2 = maakRandomGetal(digitsMin, digitsMax);

        // Maak een label voor de som zonder het antwoord
        let label = document.createElement('label');
        label.classList.add("form-label");
        label.textContent = `${getal1} + ${getal2} = `;

        // Maak een invoerveld waar de gebruiker het antwoord kan invoeren
        let input = document.createElement('input');
        input.type = 'number';
        input.classList.add("form-control", "answer-input");
        input.placeholder = 'Antwoord';

        // Maak de card-div en voeg de label en input eraan toe
        let cardDiv = document.createElement('div');
        cardDiv.classList.add("card", "py-4", "px-3");
        cardDiv.appendChild(label);
        cardDiv.appendChild(input);

        // Maak de col-div die de card-div omsluit
        let colDiv = document.createElement('div');
        colDiv.classList.add("col"); // Zorgt ervoor dat elke kaart een kolom krijgt
        colDiv.appendChild(cardDiv); // Voeg de card-div toe aan de col-div

        // Voeg de col-div toe aan de exercise-container
        exerciseContainer.appendChild(colDiv);
    }
});

//1 digits, bijv. 5
//2 digits, bijv. 56
//3 digits, bijv. 683


//random getal tussen 1 en 9
//Math.random = getal tussen 0 en 1 geven = bijv. 0.57123546
// 0.57123546 * 10 = 5,7123546
//Math.floor zorgt voor afronding naar beneden = 5
//Math.ceil zorgt voor afronding naar boven = 6

// console.log(Math.floor(Math.random()*10));//1 digit
// console.log(Math.floor(Math.random()*100));//2 digit
// console.log(Math.floor(Math.random()*1000));//3 digit








