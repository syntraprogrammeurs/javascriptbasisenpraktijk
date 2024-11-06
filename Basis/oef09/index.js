
let namen= ["Jan","Piet","Klaas"];

console.log(namen[1]);
console.log(namen.push("Fabio"));
console.log(namen[3]);
console.log(namen);
console.log(namen.push("Tom"));
console.log(namen);
console.log(namen.pop());
console.log(namen);
console.log(namen.shift());
console.log(namen);
console.log(namen.unshift("Jonas","Dieter"));
console.log(namen);
console.log(namen.length);

namen.forEach(mijnNaam => console.log(mijnNaam)); //output altijd string

let getallen = [1,2,3];
let verdubbeld = getallen.map(getal => getal * 2); //output altijd terug een array
console.log(verdubbeld);

let numbers=[1,2,3,4,5];
let evenGetallen = numbers.filter(getal => getal % 2 ===0);
console.log(evenGetallen);

let nieuwenummers = [1,2,3,4];
let eersteGroterDanTwee = nieuwenummers.find(getal => getal > 2);
console.log(eersteGroterDanTwee);
let index = nieuwenummers.findIndex(getal => getal > 2);
console.log(index);

let fruits = ["appel","banaan","peer","kiwi","kersen","sinaasappel"];
let sommigeFruits = fruits.slice(3,6);
console.log(sommigeFruits);

let tvfruits = fruits.splice(3,1,"druiven");
console.log(tvfruits);
console.log(fruits);

let newnumbers = [1,2,3,4];
let som=newnumbers.reduce((acc,num)=> acc * num, 1);
console.log(som);



