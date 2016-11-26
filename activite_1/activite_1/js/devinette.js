/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var reponse = 0;
var essai = 0;


while (reponse !== solution && essai < 6) {

    reponse = Number(prompt("Entre un nombre entre 1 et 100 (si tu ne vois pas les instructions, appuies sur F12 et cliques sur console) Essai " + essai + "/6"));

    if (reponse > 0 && reponse < 101) {
        if (reponse < solution) {
            console.log(reponse + " est trop petit");
            essai++;
        }
        else if (reponse > solution) {
            console.log(reponse + " est trop grand");
            essai++;
        }
    }
    else {
        console.log("Apprends à compter triple buse! J'ai dit entre 1 et 100!");
        essai++;
    }
}

if (reponse == solution) {
    console.log("Bravo! C'est bien " + reponse + "! Tu as trouvé! Enfin, ça reste qu'un petit jeu de devinette, te la raconte pas trop non plus hein... Pour rejouer, actualise la page en appuyant sur F5");
}

if (essai == 6) {
    console.log ("Désolée, mais plus de 6 coups pour trouver la réponse... C'est pas possible, faut être plus rapide! Pour rejouer, actualise la page en appuyant sur F5 ");
}

