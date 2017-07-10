//_________ejercicio 1______________________________
//Leer un número y escribir el valor absoluto del mismo.

var s = "";
var valor1  = Math.abs(45);
var valor2 = Math.abs(-45);
if (valor1 == valor2) {
    document.write("son los mismos.");
}
else {
document.write("son diferentes.");



//______________ejercicio 2_______________________
//Desarrolle un algoritmo que permita imprimir la sumatoria de todos los números múltiplos de 5 hasta N.
var n = [25,45,78,20,67,15];

function modulo(n){
  var suma=[];
  for(var i = 0 ;i < n.length;i++){
     if(n[i] % 5 == 0){
      suma.push(n[i]);
      }
   }
   var resul = 0;
  for(var  j = 0; j <suma.length;j++){
    resul +=suma [j];
    }
    return resul;
}
console.log(modulo(n));
//_________ejercicio 3______________________
//Desarrolle un algoritmo que permita calcular el menor de los números de n números
var num1 =46;
var num2 = 21;
var num3 = 30
if(num1 < num2 && num1< num3) {
   console.log (num1);

}
if(num2<num3 && num2 < num1){
  console.log (num2);
}
if (num3<num1 &&num3 <num2){
console.log (num3);
}
//______________ejercicio4____________________
//Desarrolle un algoritmo que permita calcular la suma de los dígitos de un numero N.


var suma = [25,40,10,20,15];

function sumar(suma){
  var resul=0;


  for(var  i = 0; i < suma.length;i++){
    resul = resul + suma[i];
    }
    return resul;
}
console.log (sumar(suma));
