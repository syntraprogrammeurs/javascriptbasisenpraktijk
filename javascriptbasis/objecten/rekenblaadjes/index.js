let score = 0;
let timerInterval;
let startTime;
let recordTime = null;

function startQuiz() {
    const digitsMin = parseInt(document.getElementById('digits-min').value);
    const digitsMax = parseInt(document.getElementById('digits-max').value);
    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    if (!validateSettings(digitsMin, digitsMax)) return;

    document.getElementById('exercise-container').innerHTML = '';
    document.getElementById('score').innerText = 0;
    document.getElementById('totalQuestions').innerText = numQuestions;
    score = 0;
    document.getElementById('scoreboard').classList.remove('d-none');
    document.getElementById('exercise-container').classList.remove('d-none');

    generateExercises(digitsMin, digitsMax, numQuestions);
    startTimer();
}

function validateSettings(digitsMin, digitsMax) {
    if (isNaN(digitsMin) || isNaN(digitsMax) || digitsMin < 1 || digitsMax > 3 || digitsMin > digitsMax) {
        alert("Zorg ervoor dat 'van' en 'tot' waarden tussen 1 en 3 zijn, en dat 'van' kleiner of gelijk aan 'tot' is.");
        return false;
    }
    return true;
}

function generateExercises(digitsMin, digitsMax, numQuestions) {
    for (let i = 0; i < numQuestions; i++) {
        const exercise = createExercise(digitsMin, digitsMax);
        document.getElementById('exercise-container').appendChild(exercise);
    }
}

function createExercise(digitsMin, digitsMax) {
    const number1 = generateRandomNumber(digitsMin, digitsMax);
    const number2 = generateRandomNumber(digitsMin, digitsMax);
    const correctAnswer = number1 + number2;

    const exerciseElement = document.createElement('div');
    exerciseElement.className = 'col';
    exerciseElement.innerHTML = `
        <div class="card p-3">
            <p>${number1} + ${number2} =</p>
            <input type="number" class="form-control answer-input" data-answer="${correctAnswer}">
            <div class="feedback mt-2"></div>
        </div>
    `;
    exerciseElement.querySelector('.answer-input').addEventListener('change', checkAnswer);
    return exerciseElement;
}

function generateRandomNumber(digitsMin, digitsMax) {
    const digits = Math.floor(Math.random() * (digitsMax - digitsMin + 1)) + digitsMin;
    const max = Math.pow(10, digits) - 1;
    const min = Math.pow(10, digits - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer(event) {
    const input = event.target;
    const feedback = input.nextElementSibling;
    const answer = parseInt(input.dataset.answer);

    // Controleer of het antwoord juist is
    if (parseInt(input.value) === answer) {
        feedback.innerHTML = `<i class="bi bi-check-circle text-success me-2"></i> <span class="text-success">Correct</span>`;
        input.classList.add("bg-success", "text-white");  // Optioneel: visuele feedback voor het inputveld zelf
        input.disabled = true;
        updateScore();
        checkCompletion();
    } else {
        feedback.innerHTML = `<i class="bi bi-x-circle text-danger me-2"></i> <span class="text-danger">Correct antwoord: ${answer}</span>`;
        input.classList.add("bg-danger", "text-white");  // Optioneel: visuele feedback voor het inputveld zelf
        input.disabled = true;
    }
}



function updateScore() {
    score++;
    document.getElementById('score').innerText = score;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').innerText = elapsedTime;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    checkForRecord(elapsedTime);
}

function checkCompletion() {
    const unanswered = Array.from(document.querySelectorAll('.answer-input'))
        .some(input => !input.disabled);

    if (!unanswered) {
        stopTimer();
        setTimeout(() => alert(`Je score: ${score}. Tijd: ${document.getElementById('timer').innerText} seconden.`), 500);
        document.getElementById('record-message').classList.add('d-none');
    }
}

function checkForRecord(elapsedTime) {
    if (recordTime === null || elapsedTime < recordTime) {
        recordTime = elapsedTime;
        document.getElementById('record-message').classList.remove('d-none');
    }
}
