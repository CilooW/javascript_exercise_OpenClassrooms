/**
 * Created by Ciloo on 16/11/2016.
 */
var mot = "Anaconda";

function compterNbVoyelles(mot) {
   var mot = mot.toLowerCase(),
       voyelle = 0;

    for (i = 0; i<mot.length; i++) {
        if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") {
            voyelle ++;
        }

    }

    return voyelle;
}

function inverser() {

}

console.log("le mot " + mot + " s'écrit en " + mot.length + " lettres");
console.log("le mot " + mot + " s'écrit en minuscules " + mot.toLowerCase());
console.log("le mot " + mot + " s'écrit en minuscules " + mot.toUpperCase());
console.log("le mot " + mot + " contient " + compterNbVoyelles(mot) + " voyelles et " + (mot.length-compterNbVoyelles(mot)) + " consonnes");
