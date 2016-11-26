/**
 * Created by Ciloo on 12/11/2016.
 */

var heure = Number (prompt("Quelle heure sera-t-il dans une seconde? donne moi une heure entre 0 et 23")),
    minutes = Number (prompt("Quelle heure sera-t-il dans une seconde? donne moi un nombre de minutes entre 0 et 59")),
    secondes = Number (prompt("Quelle heure sera-t-il dans une seconde? donne moi un nombre de secondes entre 0 et 59"));

if (heure >=0 && heure <=23 && minutes >=0 && minutes <=59 && secondes >=0 && secondes <=59 ) {

    if (heure < 23) {
        if (minutes <59) {
            if (secondes < 59) {
                secondes ++;
            }
            else {
                minutes ++;
                secondes = 0;
            }
        }
        else {
            heure ++;
            minutes = 0;
            secondes = 0;
        }
    }
    else {
        heure = 0;
        minutes = 0;
        secondes = 0;
    }
    console.log("a la prochaine seconde, il sera " + heure + "h" + minutes + "m" + secondes + "s");
}
else {
    console.log("désolé, mais une des valeurs est fausse.")
}

