
//9.	Tel Woorden: Schrijf een functie telWoorden die het aantal woorden in een string telt.

let mijnZin="Dit is een zin";
function telWoorden(zin){
    return zin.split(" ").length;
}
console.log(telWoorden(mijnZin));