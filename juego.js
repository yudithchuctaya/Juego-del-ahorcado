

var palabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];
function palabraRandom(palabras){


 var palabra = palabras[Math.floor(Math.random() * palabras.length)];
 var newPalabra = palabra.split(" ");
  console.log(newPalabra);

   return newPalabra;
}

var llamandoF1 = palabraRandom(palabras);
//funcion dibujarAsterik: imprime asteriscos de acuerdo a cuantos elementos contenga la palabra secreta.

function dibujarLinea(llamandoF1){
  var a= "";
  for(var i=0; i<llamandoF1.length; i++){
    a += (" _ ");
  }
  console.log(a);

}


var llamandoFunc=dibujarLinea(llamandoF1);

// funcion ingresarCaracter :ingresando caracter para asertar  cada palabra secreta
function ingresarCaracter(llamandoFunc){

var ingreso = prompt("INGRESA UNA LETRA QUE CONSIDERE SEA LA PALABRA SECRETA :o    ");
  for (var i = 0 ; i < llamandoFunc.length;i++){

      if(ingreso == llamandoFunc[i]){
        var caracter="";
        caracter += llamandoFunc[i];
        console.log(caracter +  "--> " + "esta en la posicion"+"-->"+i);
      }else{
      var noasert = alert ("no acertaste");
      }


  }

}
 ingresarCaracter(llamandoFunc);
function dibujarHombre(dibujar){

var hombre =  [        "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];

var palabra =palabraRandom(palabras);
console.log(palabra);
 // dibujarLinea(hombre);
}
dibujarHombre(dibujar);
