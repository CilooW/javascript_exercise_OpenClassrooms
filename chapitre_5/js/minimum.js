/**
 * Created by Ciloo on 13/11/2016.
 */

function min(nb1, nb2) {

    if (nb1 < nb2) {
        return nb1
    }
    else if (nb1 > nb2) {
        return nb2
    }
    else {
        return nb1
    }

}

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));