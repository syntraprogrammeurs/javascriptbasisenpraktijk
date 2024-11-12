//OBJECTEN
class Persoon{
   constructor(naam,voornaam,leeftijd,geboortedatum){
       this.naam = naam;
       this.voornaam = voornaam;
       this._leeftijd = leeftijd;
       this.geboortedatum = geboortedatum;
   }
   //getters en setters

    get leeftijd() {
        return this._leeftijd;
    }

    set leeftijd(eenLeeftijd) {
        if (eenLeeftijd > 0) {
            this._leeftijd = eenLeeftijd;
        } else {
            console.log("Leeftijd moet een positief getal zijn.");
        }
    }

   //functie (method)
    beschrijf(){
       return `${this.naam} - ${this.voornaam} - ${this._leeftijd} - ${this.geboortedatum}`;
    }
}
class Student extends Persoon{
    constructor(naam,voornaam,leeftijd,geboortedatum,studentNummer){
        super(naam, voornaam, leeftijd, geboortedatum) //oproepen van constructor van Persoon
        this.studentNummer = studentNummer;
    }
    beschrijf(){
        return `${super.beschrijf()} - ${this.studentNummer}`;
    }
}
//BEGIN PROGRAMMA


// 1 instantie van het object Persoon
let aantalPersonen = parseInt(prompt("Hoeveel personen wens je in te geven"));
let personen = [];

for (let i=0;i<aantalPersonen;i++){
    let naam = prompt(`Geef de naam van persoon ${i+1}`);
    let voornaam = prompt(`Geef de voornaam van persoon ${i+1}`);
    let leeftijd = prompt(`Geef de leeftijd van persoon ${i+1}`);
    let geboortedatum = prompt(`Geef de geboortedatum van persoon ${i+1}`);

    let persoon = new Persoon(naam,  voornaam, leeftijd,geboortedatum);
    personen.push(persoon);
}
// console.log(personen);

console.log("Beschrijving van de ingegeven personen:");
personen.forEach((persoon,index)=>{
    console.log(`Persoon ${index + 1}: ${persoon.beschrijf()}`);
});

nieuweStudent = new Student("Vanhoutte","Tom",53,"1973-11-08",1);

console.log(nieuweStudent.beschrijf());
