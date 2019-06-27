var cadena = require("./cadena.js")
var pal=cadena.Pali("oso")
var cad=cadena.Cont("hola como estas");
var cad2=cadena.NumL("huiis");
var cad3=cadena.NumV("aeioutrf");
var cad4=cadena.NumC("aeioutrf");
console.log(pal);
console.log("el numero de palabras es:"+cad);
console.log("el numer de letras es:"+cad2);
console.log("el numero de vocales es;"+cad3);
console.log("el numero de consonantes es;"+cad4);