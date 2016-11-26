/**
 * Created by Ciloo on 12/11/2016.
 */
var tour = Number (prompt("saisissez un nombre de tour de manège entre 1 et 20"));

if (tour >= 1 && tour <= 20) {
    for (i = 1; i <= tour ; i ++ ) {
        console.log("C'est le tour numéro " + i);
    }
}
else {
    console.log("j'ai dit entre 1 et 20... Apprends à compter!")
}