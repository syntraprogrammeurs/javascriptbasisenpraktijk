//1.	Controleer Even of Oneven: Schrijf een functie isEven die controleert of een getal even is
// resultaat moet true or false zijn.

let testGetal=parseInt(prompt("Geef een getal in"));
function isEven(getal){
    return getal%2===0;
}

console.log(isEven(testGetal));