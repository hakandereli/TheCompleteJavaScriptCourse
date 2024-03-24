//Let ve const ES6 dan sonra gelmiştir yani modern denilebilir.

//Var ise ES6 dan önce gelmiştir.

//değişmeyen ifadeler için const kullanılabilir sabit atamalar içindir bir kez atama yapılabilir.

let age = 30;
age = 31;

const birthYear = 1996;
// birthYear = 1995; bu şekilde bir atama yaparsan hata alırsın.

// const job;//Ayrıca bu şekilde de yazamazssın initial değer atamanı ister const.

//ayrıca let block kapsamlı ve var da işlev kapsamlıdır. ileride göreceksin.
/*
* var vs let
İlk olarak, var ve let’i karşılaştıralım. var ve let arasında ki fark, var function scope özelliği taşırken,
*  let block scope özelliği taşımaktadır. Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki
* süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.
* */

/*
var keyword’ü ile değişkenler tekrar tanımlanabilir ve değerleri güncellenebilir.
* */
var greater = "hey hi";
var greater = "say hello instead";

console.log(greater);

greater = "say hello hakan";

/*
* let de ise birden fazla tanımlamaya değil sadece bir den fazla değer atamaya izin verir.
* */

let month = "ocak";
let month = "subat";

//**
// Genel olarak özetleyecek olursak:
//
// 1-var function scope özelliği taşımaktadır. let ve const block scope özelliklidir.
//
// 2-Oluşturulan değişken önce kullanılıp daha sonra var keyword’ü ile tanımlanırsa herhangi bir hata oluşmaz(Hoisting). let ve const için bu durum geçerli değildir.
//
// 3-let ve const ile oluşturduğunuz değişkenlere değer atadığımızda, const ile oluşturduğunuz değişken’e tekrar atama yapamayız, ancak let değişkenine yeni bir değer ataması yapabilirsiniz.
// */
