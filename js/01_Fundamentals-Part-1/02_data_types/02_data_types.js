/*Javascript tip güvenli bir dil değil bir değişkene önce string sonra sayı sonra boolean bir şey verebilirsin.
*
* Obje ve primitive tipler ayrılmış durumda
*
* 7 Adet primitive tip var.
*
* 1- Number
* 2- String
* 3- Boolean
* 4- Undefined - değer atanmadı
* 5- Null - null atama
* 6- Symbol (ES2015) çok kullanılmaz
* 7- BigInt (ES2020) çok kullanılmaz
*
*
* */

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//String e çevirdik bunu dynamic typing deniyor buna değişkenin tipi atanan değere bağlı değişiyor.
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1007;
console.log(typeof year);

//null normalde ama type of bunu object olarak gösterir.
console.log(typeof null);