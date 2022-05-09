const db = require("../database/models");

db.Numero.findAll().then((resultado) => {
  //console.log(resultado.length);
  //console.log(resultado[0].dataValues.numero);
  arrayInicial = [];
  for (let i = 0; i < resultado.length; i++) {
    arrayInicial.push(resultado[i].dataValues.numero);
  }

  let arrayNumero = [];
  let arraySubVectores = [];
  let numero52 = 0;

  for (let i = 0; i < arrayInicial.length; i++) {
    if (numero52 < 52) {
      if (numero52 + arrayInicial[i] <= 52) {
        numero52 = numero52 + arrayInicial[i];
        arrayNumero.push(arrayInicial[i]);
        arrayInicial.splice(i, 1);
        //console.log(numero52);
        i = 0;
      }
    } else if (numero52 == 52) {
      //console.log(arrayNumero + "Hola");
      arraySubVectores.push(arrayNumero);
      arrayNumero = [];
      numero52 = 0;
    }
    console.log(arrayInicial.length);
    //console.log(arraySubVectores);
  }
  //console.log(arrayInicial);
  //console.log("Longitud de array: " + arraySubVectores.length);
  for (let i = 0; i < arraySubVectores.length; i++) {
    SubVector.create({
      array: arraySubVectores[i],
    });
  }
});
