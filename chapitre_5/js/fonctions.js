/**
 * Created by Ciloo on 12/11/2016.
 * Créer une fonction qui dit un bonjour personnalisé, et qui demande en premier lieu le nom et prenom de la personne
 */
function direBonjour (prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("quel est ton prénom?");
var nom = prompt("quel est ton nom?");

console.log(direBonjour(prenom,nom));