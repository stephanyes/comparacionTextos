function includesText(texto1,texto2){
/*    var texto1 = texto1.toUpperCase();
    var texto2 = texto2.toUpperCase();

    Sin el var se vuelve global
 */
 if (typeof texto1 === 'string' && typeof texto2 === 'string') {
    if (texto2.toUpperCase().indexOf(texto1.toUpperCase()) === -1){
        return false;
        } else {
            return true;
            }
          }


          console.log(includesText('Pa', 'patricia'));

}

          function includesText (text, baseText) {
              if (typeof text === 'string' && typeof baseText === 'string'){
                  if(text.toUpperCase().indexOf(baseText.toUpperCase()) !== -1){
                      return true;
                  } else {
                      return false;
                  }
              } else {
                  return false;
              }
          }
