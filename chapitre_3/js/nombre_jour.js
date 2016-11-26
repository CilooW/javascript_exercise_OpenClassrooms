/**
 * Created by Ciloo on 12/11/2016.
 */

var mois = Number (prompt("donnez le numéro d'un mois entre 1 et 12"));

if (mois >= 1 && mois <=12) {

    if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
        console.log("ce mois comporte 30 jours")
    }

    else if (mois == 2) {
        console.log("ce mois est spécial, il comporte 28 jours, sauf s'il s'agit d'une année bissextile, où il en comptera 29")
    }

    else {
        console.log ("Ce mois comporte 31 jours")

    }

}

else {
    console.log("J'ai dit un nombre entre 1 et 12!")
}