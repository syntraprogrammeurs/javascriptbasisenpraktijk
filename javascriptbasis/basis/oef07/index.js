//4.	Vermenigvuldig en Controleer: Schrijf een functie vermenigvuldigEnControleer die twee getallen vermenigvuldigt en controleert of het resultaat groter is dan 100.
//output = true or false
let getal1 = parseInt(prompt("Geef getal in:"));
let getal2 = parseInt(prompt("Geef getal in:"));
function vermenigvuldigEnControleer(a,b){
    return a*b > 100;
}

console.log(vermenigvuldigEnControleer(getal1,getal2));