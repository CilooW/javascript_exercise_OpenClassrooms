/**
 * Created by Ciloo on 12/11/2016.
 */

var jour = prompt("Entrez un jour de la semaine"),
    joursuivant = "";


switch (jour) {
    case "lundi" :      joursuivant = "mardi";
        break;
    case "mardi" :      joursuivant = "mercredi";
        break;
    case "mercredi" :   joursuivant = "jeudi";
        break;
    case "jeudi" :      joursuivant = "vendredi";
        break;
    case "vendredi" :   joursuivant = "samedi";
        break;
    case "samedi" :     joursuivant = "dimanche";
        break;
    case "dimanche" :   joursuivant = "lundi";
        break;
    default:            console.log("désolée, ceci n'est pas un jour de la semaine");
};


console.log ("demain, nous serons " + joursuivant)
