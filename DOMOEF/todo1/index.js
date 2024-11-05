

function VoegToeAanLijst(){
    //haal eerst alle items op
    let invoer = document.getElementById("invoer").value;
    let lijst = document.getElementById("lijst");

//maak een li tag aan
    let nieuwElement = document.createElement("li");
    nieuwElement.textContent = invoer;//<li>Voeding</li>

    // Maak een trash-icon aan: <li>invoer<span class="">trash icon</span></li>
    let trashIcon = document.createElement("span");
    trashIcon.innerHTML = '<i class="bi bi-trash"></i>';
    trashIcon.classList.add("text-danger","ms-3","fs-1","pe-3","cursor-pointer");
    nieuwElement.appendChild(trashIcon);

    trashIcon.addEventListener("click", function (){
        nieuwElement.remove();
    })

//toeveogen aan de lijst
    lijst.appendChild(nieuwElement);

    //wissen van het invoerveld
    document.getElementById("invoer").value = "";

    //injectie van classes
    nieuwElement.classList.add("p-2", "bg-light", "rounded-pill", "shadow-sm", "mb-2", "fs-1","d-flex","justify-content-between");
}

//Event lister knop
let knop = document.getElementById("toevoegen");
knop.addEventListener("click", VoegToeAanLijst);
