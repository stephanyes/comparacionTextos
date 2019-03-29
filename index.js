  function includesText(texto1,texto2){
  /*     texto1 = texto1.toUpperCase();
      texto2 = texto2.toUpperCase();
   */
  if (texto2.toUpperCase().indexOf(texto1.toUpperCase()) === -1){
          return false;
      } else {
          return true;
    }
}
console.log(includesText('Pa', 'Parmeggiano'));
