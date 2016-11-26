/**
 * Created by Ciloo on 16/11/2016.
 */

function perimetre(rayon) {

    var result = 2 * Math.PI * rayon;

    return result

}

function aire(rayon) {
    var result = Math.PI * (rayon*rayon);

    return result
}

var rayon = Number(prompt("Entrer la longueur du rayon d'un cercle"));

console.log("Le périmètre d'un cercle de rayon " + rayon + " est de " + perimetre(rayon));
console.log("L'aire d'un cercle de rayon " + rayon + " est de " + aire(rayon));