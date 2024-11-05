//Maak een knop die, wanneer erop wordt geklikt, de achtergrondkleur van de pagina wijzigt naar een willekeurige kleur.
//built in random functie.
// knop in het exacte midden van de pagina.
// Tip: Math.floor(Math.random()*256)

function getRandomRGBColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})` //rgb(255,221,16)
}
function getRandomRGBColorOpacity(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const a=Math.random().toFixed(1);

    return `rgba(${r},${g},${b},${a})` //rgb(255,221,16)
}
let knop = document.getElementById("veranderKleur");
knop.addEventListener("click", function (){
   document.body.style.backgroundColor = getRandomRGBColorOpacity();//rgb(255,221,16)
});