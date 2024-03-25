/*
*Console log un içine virgüllerle ayırarak loglanmasını istediğin birden fazla değer gönderebilirsin.
*
* ** üst alma operatörüdür.
*
* değişkenlerin değerini değiştirmeyip sadece yazdıralacağı için const olarak tanımladık.
*  */
//Math operators
const now = 2034;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//string concat
const firstName = 'Hakan';
const lastName = 'Dereli';
console.log(firstName + '  ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison Operators -- true veya false döner
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);
console.log(ageJonas < 20);
console.log(ageJonas <= ageSarah);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)