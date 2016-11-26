/**
 * Created by Ciloo on 26/11/2016.
 */

var nom = prompt("Quel est ton nom?"),
    content = document.getElementById("fete");

    content.innerHTML = "Bonne Fête " + nom;

function changeFond() {
    if (nom == "Cathy" || nom == "cathy" || nom == "Catherine" || nom == "catherine") {
        content.style.backgroundImage = "fall-autumn-red-season.jpg";
        console.log(nom);
    }
        else if (nom == "Clément" ||nom == "clément" || nom == "Clement" ||nom == "clement") {
            content.style.backgroundImage = "cookie-monster.jpg"
        }
}
changeFond();
