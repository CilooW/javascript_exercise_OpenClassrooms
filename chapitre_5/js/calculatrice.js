/**
 * Created by Ciloo on 13/11/2016.
 */

function calculer(nb1, signe ,nb2) {
    var result ;
    switch (signe) {
        case "+": result = nb1 + nb2;
            break;
        case "-": result = nb1 - nb2;
            break;
        case "*": result = nb1 * nb2;
            break;
        case "/": result = nb1 / nb2;
            break;
        default : "pas compris!";
    }
    return result;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity