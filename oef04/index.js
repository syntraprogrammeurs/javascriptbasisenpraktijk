//2.	Begroeting: Schrijf een functie begroet die een naam als parameter ontvangt en een begroeting retourneert.
//Output = Hallo Tom!
let mijnNaam = prompt("Geef je naam in:");
function begroet(naam){
    return `Hallo ${naam}`;
}
console.log(begroet(mijnNaam));

