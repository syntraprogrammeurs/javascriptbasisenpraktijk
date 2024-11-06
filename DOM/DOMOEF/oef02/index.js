//Maak een knop die, wanneer erop wordt geklikt, de achtergrondkleur van de pagina wijzigt naar een willekeurige kleur.
//built in random functie.
// knop in het exacte midden van de pagina.
//

const kleuren = [ "lightcoral", "lightseagreen", "lightsalmon", "lightpink", "lightgreen", "lightskyblue", "lightblue", "lightsteelblue", "lightyellow", "lightgoldenrodyellow", "lavender", "thistle", "plum", "violet", "aquamarine", "khaki", "peachpuff", "palegreen", "paleturquoise", "palevioletred" ];

function getRandomColor(){
    const randomIndex = Math.floor(Math.random() * kleuren.length);
    return kleuren[randomIndex];
}

let knop = document.getElementById("veranderKleur");
knop.addEventListener("click", function (){
   document.body.style.backgroundColor = getRandomColor();//rgb(255,221,16)
});