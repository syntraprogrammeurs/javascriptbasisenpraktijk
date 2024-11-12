// let persoon = "Tom" //variabele

let persoon = {
    naam: "Tom",
    leeftijd:30,
    beroep:"developer"
}
//seal
Object.seal(persoon);
console.log(typeof(persoon));

//creëren en wijzigen van een object
persoon.naam = "Tim";
console.log(persoon);
//deleten uit een object
delete persoon.beroep;
console.log(persoon);
//properties ophalen
console.log(Object.keys(persoon));
//properties tonen op scherm
console.log(persoon['naam']);
console.log(persoon[0]);//undefined
//values ophalen
console.log(Object.values(persoon));
//subarray (meerdimensioneel)
console.log(Object.entries(persoon));

//ik wil weten of dit een eigenschap is van een persoon.

console.log(persoon.hasOwnProperty("naam"));
console.log(persoon.hasOwnProperty("kleurOgen"));


//constructor
function Persoon(naam,leeftijd){
    this.naam = naam;
    this.leeftijd = leeftijd;

}

let Amine = new Persoon("Amine",30);
let Jonas = new Persoon("jonas",22);

// let su = new persoon()
// let fabio = new persoon()