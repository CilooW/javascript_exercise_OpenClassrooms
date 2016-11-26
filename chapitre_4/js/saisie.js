/**
 * Created by Ciloo on 12/11/2016.
 */

var nombre = 0;

while (nombre <50 || nombre > 100) {
   nombre = Number (prompt("choisissez un nombre compris entre 50 et 100. " +
        "Si vous choisissez un nombre au dessus ou en dessous, je vous referai cette demande " +
        "jusqu'à ce que vous choisissiez un nombre correspondant à ma demande."));
}