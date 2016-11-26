/**
 * Created by Ciloo on 12/11/2016.
 */

var number = 1;
var F = "Fizz";
var B = "Buzz";

for (number = 1; number <=100; number ++) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log(F + B)
    }
    else {
        if (number % 3 == 0) {
            console.log(F)
        }
        else {
          if (number % 5 == 0) {
              console.log(B)
          }
          else {
              console.log(number)
          }
        }
    }
}