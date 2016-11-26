/**
 * Created by Ciloo on 12/11/2016.
 */

var moyenne = Number(prompt("Donnez votre moyenne au bac"));

if (moyenne >= 0 && moyenne <=20) {

    if (moyenne >= 10) {
        if (moyenne <= 12) {
            console.log("Vous êtes reçu! C'est pas ouf, mais c'est bien.")
        }
        else {
            console.log("Vous êtes reçu, et avec mention! Mes respects!")
        }

    }
    else {
        console.log("désolée, mais ce n'est pas assez. Il faudra retenter l'an prochain.")
    }
}
else {
    console.log("dois-je vous rappeler qu'une moyenne est comprise entre 0 et 20?")
}