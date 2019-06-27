function Palindromo(cad){
    var pal= cad.split('');
    var Pinicial = cad;
    cad= " ";
    for(var i= pal.length-1;i >=0; i--){
        cad += pal[i];
    }
    var res = Pinicial.localeCompare(cad.substring(1,cad.length));
    if(res == 0){
        return "es palindromo";
    }
    else{
        return "no es palindromo";
    }
}
module.exports.Pali=Palindromo;
//contar palabras
function Contpal(cad){
    var cont=cad.split(" ");
        
    return cont.length;
}
module.exports.Cont=Contpal;
//contar numero de letras sin espacio
function Numletras(cad){
    var letras = Array ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    var cont=0;
    for(i=0;i<cad.length;i++){
        if(cad.charAt[i]==letras)
        cont++;
    }
    return cont;
}
module.exports.NumL=Numletras;
//cuenta el numero de vocales
function NumVoca(cad){
    var cont=0;
    for(x=0;x<cad.length;x++) {
        if ((cad.charAt(x)=='a') || (cad.charAt(x)=='e') || (cad.charAt(x)=='i') || (cad.charAt(x)=='o') || (cad.charAt(x)=='u')){
          cont++;
        }
      }
    return cont;
}
module.exports.NumV=NumVoca;
function NumCon(cad){
    var cont=0;
    for(x=0;x<cad.length;x++) {
        cont++;
        if ((cad.charAt(x)=='a') || (cad.charAt(x)=='e') || (cad.charAt(x)=='i') || (cad.charAt(x)=='o') || (cad.charAt(x)=='u')){
          cont--;
        }
      }
    return cont;

}
module.exports.NumC=NumCon;