/**
 * Created by Ciloo on 12/11/2016.
 */

var number = Number(prompt("entrez un nombre pour voir sa table de multiplication"));

if (number >=2 && number <=9) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);

    }
}