/**
 * Created by Ciloo on 12/11/2016.
 */

var text = "";

while (text !== "oui" && text !== "non") {
    text = prompt("Jouons à ni oui, ni non, voulez-vous? ... enfin, en fait, vous pouvez écrire ce que vous voulez, de toute façon je vous afficherai ce texte, tant que vous m'aurez pas dit oui ou non");
}
console.log ("Vous avez dit oui ou non! J'ai gagné! Mouahaha...");