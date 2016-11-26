/**
 * Created by Ciloo on 12/11/2016.
 */

var nombre = Number (prompt("Donne moi un nombre"));

for (var i = 1; i <= 10; i++) {
    if (nombre % 2 === 0) {
        console.log(nombre + " est pair");
        nombre++;
    }
    else {
        console.log(nombre + " est impair");
        nombre++;
    }
}