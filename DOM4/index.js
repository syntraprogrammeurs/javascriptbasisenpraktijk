let nieuwParagraaf = document.createElement("p");
nieuwParagraaf.textContent ="Dit is een nieuwe paragraaf";
document.body.appendChild(nieuwParagraaf);

let container = document.getElementById("container");
let paragraaf = document.getElementById("paragraaf");
container.removeChild(paragraaf);