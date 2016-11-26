/**
 * Created by Ciloo on 13/11/2016.
 * Créer une fonction qui renvoie le carré des nombre entre 0 et 10
 */

function carre(x) {
    var result = x*x;
    return result;
}

for (i = 0; i <= 10 ; i++) {
    console.log(carre(i));
}
