//Stap 1: Vraag aan de gebruiker hoeveel namen hij wil ingeven
//Stap 2: Iedere naam wordt aan de array doorgegeven (push)
//Stap 3: console.log(namen)
//Stap 4: Sorteer de namen alfabetisch
//Stap 5: Sorteer de namen in omgekeerde volgorde

let aantalNamen = parseInt(prompt("Hoeveel namen wil je ingeven?"));
let namen=[];
for (let i=1;i <= aantalNamen;i++){
    let mijnNaam =prompt(`Geef naam ${i} in`);
    namen.push(mijnNaam);
}
console.log(namen);
console.log(namen.sort());
console.log(namen.sort().reverse());


