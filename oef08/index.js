//23.	Bereken Dagen Tussen Twee Datums: Schrijf een functie dagen
// Tussen die het aantal dagen tussen twee datums retourneert.


function dagenTussen(datum1,datum2){

    const tijdverschil = Math.abs(Date.parse(datum2) - Date.parse(datum1));
    return tijdverschil / (1000 * 60 * 60 * 24);
}

console.log(dagenTussen('2024-11-04','1973-11-08'));

//Uitbreiding

function jarenEnMaanden(datum1, datum2){
    const dagen = dagenTussen(datum1,datum2) // 18064
}


