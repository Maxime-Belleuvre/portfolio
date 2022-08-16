const margeB = 50 ;
const margeW = 200 ;
const margeG = 50 ;
const margeD = 20 ;

// - Une fonction générant X lignes dans un container 
function generate(){
    // on récupèe la valeur tapé par l'utilisateur
    let X = document.getElementById("nbrLigne").value;
    // Fait le lien entre la balise html et ma variable js monContainer
    let monContainer = document.getElementById("container");
    let derniereCouleur = ColorRandom();
    let monTab = [0,0,0,0,0,0,2,3,4,5,6,12];
    // on génére X ligne
    for(let i=0;i<X;i++){
        // Genere 1 div 
        let maRow = document.createElement("div");
        // On lui ajoute la class css de bootstrap row
        maRow.classList.add("row", "hauteur");
        // Fait apparaitre la ligne dans le container
        monContainer.appendChild(maRow);
        // on fabrique 12 colonnes
        for(let y=0; y<12;y++){
            // on genere un couleur
            let maCouleur = ColorRandom();
            // tant que ma couleur est la même que la couleur précédente, je regénére un couleur
            while(WhichColor(maCouleur) == WhichColor(derniereCouleur)){
                maCouleur = ColorRandom();
            }
            // on stock la dernier valeur de la couleur
            derniereCouleur = maCouleur;
            // Genere une colonne
            let maCol = document.createElement("div");
            // on ajoute la classe col-1 de bootstrap
            maCol.classList.add("col-1");
            // couleur aléatoire
            maCol.style.backgroundColor = maCouleur;
            
            // on ajoute ma colonne dans ma ligne
            maRow.appendChild(maCol);
            if(y > 5){
                let ligne2 = document.createElement("div");
                ligne2.classList.add("row");
                maCol.appendChild(ligne2);
                for(let k=0; k<monTab[y];k++){
                    let col2 = document.createElement("div");
                    col2.classList.add("col", "hauteur");
                    col2.style.backgroundColor = ColorRandom(); 
                    ligne2.appendChild(col2);
                }
            }else{
                maCol.textContent = WhichColor(maCouleur);
                // j'ajoute un gestionnaire d'evenement, je capte l'evenement mousehover(souris survol)
                // lorsque cette évenement se déclenche, la fonction anonyme est appelée 
                maCol.addEventListener("mouseover", function(){
                    maCol.style.backgroundColor = ColorRandom();
                    maCol.textContent = WhichColor(maCol.style.backgroundColor);
                });
            }
        }
    }
}











WhichColor(ColorRandom());

function ColorRandom() {
    let tableau = []; // création d'une variable type tableau
    tableau.push(Math.floor(Math.random() * 255)); //Ajout d'un nombre aléatoire compris entre 0 et 254 dans le tableau
    tableau.push(Math.floor(Math.random() * 255)); //Ajout d'un nombre aléatoire compris entre 0 et 254 dans le tableau
    tableau.push(Math.floor(Math.random() * 255)); //Ajout d'un nombre aléatoire compris entre 0 et 254 dans le tableau
    //document.body.style.backgroundColor = "rgb("+tableau.join(",")+")";
    return "rgb("+tableau.join(",")+")"; //on retourne une chaîne de caractères sous la forme : "rgb(" + les valeurs du tableau + ")"
}

function IsItBlue(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
        if (tableau[2] > tableau[0] && tableau[2] > tableau[1]){ // Test: si la valeur du bleu est supérieure au rouge ET aussi supérieure au vert... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //Si la valeur du bleu n'est pas supérieure au rouge ET au vert, on retourne la valeur booléenne false
        }
    }

function IsItGreen(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
        if (tableau[1] > tableau[0] && tableau[1] > tableau[2]){ // Test: si la valeur du vert est supérieure au rouge ET aussi supérieure au bleu... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //Si la valeur du vert n'est pas supérieure au rouge ET au bleu, on retourne la valeur booléenne false
        }
    }


function IsItRed(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]);  // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
        if (tableau[0] > tableau[2] && tableau[0] > tableau[1]){ // Test: si la valeur du rouge est supérieure au bleu ET aussi supérieure au vert... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //Si la valeur du rouge n'est pas supérieure au bleu ET au vert, on retourne la valeur booléenne false
        }
    }

function IsItBlack(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
    //let marge = 50; // Définition du seuil sous lequel les couleurs seront considérées noires
        if (tableau[0] < margeB && tableau[1] < margeB && tableau[2] < margeB){ //Test: si TOUTES les valeurs du tableau sont inférieures à la marge, la couleur est considérée comme noire
            return true; // On retourne la valeur booléenne true 
        } else{
            return false; //Si au moins une des valeurs est supérieure à la marge, alors la couleur n'est pas considérée comme noire et on retourne la valeur booléenne false
        }
    }

function IsItWhite(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
    //let marge = 200; // Définition du seuil au-dessus duquel les couleurs seront considérées blanches
        if (tableau[0] > margeW && tableau[1] > margeW && tableau[2] > margeW){ //Test: si TOUTES les valeurs du tableau sont supérieures à la marge, la couleur est considérée comme blanche
            return true;  // On retourne la valeur booléenne true 
        } else{
            return false; //Si au moins une des valeurs est inférieure à la marge, alors la couleur n'est pas considérée comme blanche et on retourne la valeur booléenne false
        }
    }

function IsItGrey(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
    for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
        tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
    }
    let moitie = 127; // définition du seuil moyen de gris
    //let marge = 50; // définition de la marge maximum d'écart avec le seuil
        if (Math.abs(tableau[0]-moitie) < margeG && Math.abs(tableau[1]-moitie) < margeG && Math.abs(tableau[2]-moitie) < margeG){ // Test: si les valeurs du tableau sont TOUTES comprises à l'intérieur de l'intervalle défini précédemment, la couleur est considérée comme grise
            return true; // On retourne la valeur booléenne true 
        } else{
            return false; //si au moins une valeur du tableau n'est pas comprise à l'intérieur de l'intervalle défini précédemment, la couleur n'est pas considérée comme grise et on retourne la valeur booléenne false
        }
    
}

function IsItYellow(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
        for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
            tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
        }
        //let margeD=20;
        if (Math.abs( tableau[0] - tableau[1] ) < margeD && tableau[2] < Math.min(tableau[0],tableau[1])){ // Test: si l'écart entre les valeurs du rouge et vert est inférieur à la marge ET que la valeur du bleu est inférieur aux autres alors ... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //si l'écart entre les valeurs du rouge et vert n'est pas inférieur à la marge, on retourne la valeur booléenne false
        }
    }

function IsItMagenta(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
        for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
            tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
        }
        //let marge=20;
        if (Math.abs( tableau[0] - tableau[2] ) < margeD && tableau[1] < Math.min(tableau[0],tableau[2])){ // Test: si l'écart entre les valeurs du rouge et bleu est inférieur à la marge ET que la valeur du vert est inférieur aux autres alors ... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //si l'écart entre les valeurs du rouge et bleu n'est pas inférieur à la marge, on retourne la valeur booléenne false
        }
    }

function IsItCyan(rgb){ //argument rgb : chaîne de caractères du type suivant : "rgb(X,X,X)" où X sont des valeurs numériques comprises entre 0 et 254

    let tableau = rgb.substr(4,rgb.length-5).split(","); // Création d'un tableau contenant comme éléments uniquement les valeurs fournies en entrée, sous forme de chaînes (exemple : ["X","X","X"])
        for (let i = 0;i < tableau.length;i++){ // Boucle sur les éléments du tableau...
            tableau[i] = parseInt(tableau[i]); // ...pour convertir les valeurs type chaîne en valeurs type integer (numérique) 
        }
        //let marge=20;
        if (Math.abs( tableau[1] - tableau[2] ) < margeD && tableau[0] < Math.min(tableau[2],tableau[1])){ // Test: si l'écart entre les valeurs du vert et bleu est inférieur à la marge  ET que la valeur du rouge est inférieur aux autres alors ... 
                return true; // On retourne la valeur booléenne true
            } else {
            return false; //si l'écart entre les valeurs du vert et bleu n'est pas inférieur à la marge, on retourne la valeur booléenne false
        }
    }
    





function WhichColor(rgb){       // On vérifie la couleur en argument en faisant appel à chaque fonction puis on retourne le nom de la couleur 
   // console.log(rgb);
    if(IsItBlack(rgb)){             
        console.log('Black')
        return "Black";
    }else if(IsItWhite(rgb)){
        console.log('White')
        return "White";
    }else if(IsItGrey(rgb)){
        console.log("Grey")
        return "Grey";
    }else if(IsItYellow(rgb)){
        console.log('Yellow')
       return "Yellow";
    }else if(IsItMagenta(rgb)){
        console.log('Magenta')
        return "Magenta";
    }else if(IsItCyan(rgb)){
        console.log('Cyan')
        return "Cyan";
    }else if(IsItRed(rgb)){
        console.log('Red')
        return "Red";
    }else if(IsItGreen(rgb)){
        console.log('Green')
        return "Green";
    }else if(IsItBlue(rgb)){
        console.log('Blue')
        return "Blue";
    }
}