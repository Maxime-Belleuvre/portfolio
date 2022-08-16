//On récupère le container dans l'HTML
let container = document.getElementById('container');

//Déclaration d'une variable ligne pour la portée globale
let uneRow = "";

//On déclare X pour avoir une portée globale
let X = '';

//Fonction pour déterminer si le JSON est valide
function isMesQuartiersSet(){
    //On récupère depuis le local storage la liste
    let a = localStorage.getItem('mesQuartiers')
    if(a != '' && a != null && a != undefined){
        //On tranforme JSON en chaine de caractere
        mesQuartiers = JSON.parse(a)
    }
}

//Fonction de création du formulaire
function generateInput(){

    //On récupère la div en HTML
    let divForm = document.getElementById('divForm');

    //On efface le contenu à chaque appel
    divForm.innerHTML = '';

    //Au clique de la checkbox administrateur
    if(document.querySelector('input[name="admin"]:checked')){
        //Création de deux lignes
        let premiereRow = document.createElement('div');
        premiereRow.classList.add('row');
        divForm.appendChild(premiereRow);

        let deuxiemeRow = document.createElement('div');
        deuxiemeRow.classList.add('row');
        divForm.appendChild(deuxiemeRow);

        //Création des colonnes pour chaque input
        let col2 = document.createElement('div');
        col2.classList.add('col-6');
        premiereRow.appendChild(col2);

        let col1 = document.createElement('div');
        col1.classList.add('col-6');
        premiereRow.appendChild(col1);

        let col3 = document.createElement('div');
        col3.classList.add('col-4');
        deuxiemeRow.appendChild(col3);

        let col4 = document.createElement('div');
        col4.classList.add('col-4');
        deuxiemeRow.appendChild(col4);

        //On centre le bouton avec d-flex
        let col5 = document.createElement('div');
        col5.classList.add('col-4','d-flex','justify-content-center');
        deuxiemeRow.appendChild(col5);


        //Création input pour rentre le numéro de la rue
        let inputNom = document.createElement('input');
        inputNom.classList.add('form-control');
        //On attribue le type number
        inputNom.type = 'number';
        inputNom.name = 'nom';
        //On empeche d'entrer une valeur négative
        inputNom.min = 1;
        inputNom.id = 'nom';
        inputNom.placeholder = 'Indiquez le numéro de la place';
        col2.append(inputNom);

        //Création input pour rentrer le nom de la rue
        let inputNomRue = document.createElement('input');
        inputNomRue.classList.add('form-control');
        //Type texte
        inputNomRue.type = 'text';
        inputNomRue.name = 'nomRue';
        inputNomRue.id = 'nomDeLaRue';
        inputNomRue.placeholder = 'Indiquez le nom de la rue';
        col1.append(inputNomRue);

        //Création du label de la checkbox
        let labelDispo = document.createElement('label');
        labelDispo.classList.add('margeDroite');
        labelDispo.textContent = 'Disponible';
        col3.appendChild(labelDispo);

        //Création checkbox pour déterminer si disponible
        let radioDispo = document.createElement('input');
        //Attribution du type
        radioDispo.type = 'checkbox';
        radioDispo.name = 'dispo';
        radioDispo.id = 'dispo';
        //On lui indique la valeur de 1 quand elle est selectionnée
        radioDispo.value = "1";
        col3.appendChild(radioDispo);

        //Création de l'input pour l'heure
        let inputHeure = document.createElement('input');
        inputHeure.classList.add('form-control');
        //Type number
        inputHeure.type = 'number';
        inputHeure.name = 'heure';
        //On empeche d'entrer une valeur négative
        inputHeure.min = 1;
        inputHeure.id = 'heure';
        //On limite à 24h
        inputHeure.max = 24;
        col4.appendChild(inputHeure);

        //Création du bouton de validation
        let btn = document.createElement('input');
        btn.classList.add('btn', 'btn-success');
        //Type submit
        btn.type = 'submit'
        btn.value = 'Valider';
        btn.id = 'button';
        //On attribue onclick au bouton
        btn.setAttribute('onclick','rajouterRue(X)')
        col5.appendChild(btn);
    }
}

//Fonction générant les places de parkings
function generate(x){
    //On vide le contenu à chaque clics
    container.innerHTML ="";

    //On boucle dans le json pour lire toutes les places d'un quartier
    for(let i = 0; i < mesQuartiers[x].quartier.length; i++){

        //Création d'une variable pour contenir l'heure des places
        let heure = document.createElement('footer');

        //Attribution de la class footer de bootstrap
        heure.classList.add('card-footer');

        //On utilise le modulo de 6 pour avoir une ligne toutes les 3 places/colonnes
        if(i%6 == 0){
            uneRow = document.createElement('div');
            uneRow.classList.add('row');
            container.appendChild(uneRow);
        }
        //On déclare une colonne, attribue une classe et l'ajoute dans le HTML
        let uneCol = document.createElement('div');
        uneCol.classList.add('col-12', 'col-md-6', 'col-lg-4', 'margeTop');
        uneRow.appendChild(uneCol);

        //On déclare une card et attribue la class bootstrap pour la mise en forme
        let maCard = document.createElement('div');
        maCard.classList.add('card');
        //On rajoute à chaque colonne
        uneCol.appendChild(maCard);
        
        //On fait une variable pour les dispo des places
        let placeDispo = document.createElement('div');
        //On attribue la class header
        placeDispo.classList.add('card-header');
        //Si la place est dispo :
        if(mesQuartiers[x].quartier[i].disponibilite == 1){
            //On afficher Disponible
            placeDispo.textContent = 'Disponible';
            //Changement de fond
            placeDispo.classList.add('bg-success', 'blanc');
            //On donne un texte avec l'heure dispo
            heure.textContent ="Place libre depuis " + mesQuartiers[x].quartier[i].heurePrise + "h";
            //Changement de fond
            heure.classList.add('bg-success', 'blanc');
        }
        //Si place occupée
        else{
            placeDispo.textContent = 'Occupée';
            placeDispo.classList.add('bg-danger', 'blanc');
            heure.textContent ="Place occupée depuis " + mesQuartiers[x].quartier[i].heurePrise + "h";
            heure.classList.add('bg-danger', 'blanc');
        }
        //On rajoute la valeur de disponibilité à la card
        maCard.appendChild(placeDispo);

        //On créer une cardBody pour le texte
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body','bg-light');
        maCard.appendChild(cardBody);

        //On créer un titre pour le nom de la rue
        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = mesQuartiers[x].quartier[i].nomRue;
        //On rajoute à la cardBody
        cardBody.appendChild(title);

        //Sous-titre pour le numéro de la place
        let sousTitre = document.createElement('h6');
        sousTitre.classList.add("card-subtitle");
        sousTitre.textContent = 'Place '  + mesQuartiers[x].quartier[i].nom;
        cardBody.appendChild(sousTitre);

        //On finit par afficher en dernier l'heure (footer)
        maCard.appendChild(heure);
        //On créer un bouton pour supprimer un bouton

        if(document.querySelector('input[name="admin"]:checked')){
        
            //Bouton suppression
            let delButton = document.createElement('button');
            delButton.classList.add('btn','btn-danger', 'bordure');
            delButton.textContent = 'Suppressions de la place';
            maCard.appendChild(delButton);
            //Fonction suppression
            delButton.addEventListener('click', function(){
                //On enleve une fois la place où se situe le bouton
                mesQuartiers[x].quartier.splice(i, 1);
                //On enregistre en local storage en transformant les chaines de caractère en JSON
                localStorage.setItem('mesQuartiers',JSON.stringify(mesQuartiers))
                //On regènere les cards
                generate(x)
            })
            //Bouton de modification
            let modButton = document.createElement('button');
            modButton.classList.add('btn', 'btn-primary', 'bordure');
            modButton.textContent = 'Changement de statut';
            maCard.appendChild(modButton);

            modButton.addEventListener('click', function(){
                //Fonction JS pour récupérer l'heure au clic
                let h = new Date().getHours();
                //Si place dispo (=1), changement en indispo (=0)
                if(mesQuartiers[x].quartier[i].disponibilite == 1){
                    mesQuartiers[x].quartier[i].disponibilite = 0;
                }else{
                //Si place indispo(=0), on la change en dispo (=1)
                    mesQuartiers[x].quartier[i].disponibilite = 1;
                }
                //On donne comme valeur l'heure actuelle
                mesQuartiers[x].quartier[i].heurePrise = h;
                //Enregistrement en local storage
                localStorage.setItem('mesQuartiers',JSON.stringify(mesQuartiers));
                //On regène les cartes
                generate(x);
            });
        }
    }       
}

/**
 * Création de 4 variables pour chaque image de la carte avec des écouteurs d'évennements au click pour donner une valeur à x et lancer la fonction generate, 0 étant la première clé du tableau mesQuartiers
 */

let valeurQuartier1 = document.getElementById("0");
valeurQuartier1.addEventListener("click", function(){
    isMesQuartiersSet()
    X = 0;
    generateInput();
    generate(X);
});

let valeurQuartier2 = document.getElementById("1");
valeurQuartier2.addEventListener("click", function(){
    isMesQuartiersSet()
    X = 1;
    generateInput();
    generate(X);
});

let valeurQuartier3 = document.getElementById("2");
valeurQuartier3.addEventListener("click", function(){
    isMesQuartiersSet()
    X = 2;
    generateInput();
    generate(X);
});

let valeurQuartier4 = document.getElementById("3");
valeurQuartier4.addEventListener("click", function(){
    isMesQuartiersSet()
    X = 3;
    generateInput();
    generate(X);
});


//On définit une fonction pour rajouter une rue
function rajouterRue(X){
    //On récupère la valeur d'un élément HTML
    let nom = document.getElementById('nom').value;
    let nomRue = document.getElementById('nomDeLaRue').value;
    //Par défaut on indisque la place indispo
    let disponibilite = 0;
    //On récupère la valeur indiquée
    let heureIndiquee = document.getElementById('heure').value;

    //On oblige à indiquer des valeurs aux inputs
    if(nom == "" || nomRue =="" || heureIndiquee == ""){
        alert('Veuillez entrer des données')
        return
    }
    if(nom == " " && nomRue ==" " && heureIndiquee == " "){
        alert('Veuillez entrer des données')
        return
    }
    //Au clique de la checkbox on donne la valeur de 1 à disponibilite
    if(document.querySelector('input[name="dispo"]:checked')){
        disponibilite = document.getElementById('dispo').value;
    }

    //Onboucle les donnée du JSON pour comparer les données rentrées et celles déjà existantes
    for(let y = 0; y < mesQuartiers[X].quartier.length; y++){
        //Si les données match, on alert et on annule la fonction
        if(mesQuartiers[X].quartier[y].nom == nom && mesQuartiers[X].quartier[y].nomRue == nomRue){
            alert('Place déjà existante !')
            return
        }
    }

    //Création d'un objet nouvelleRue avec les variables précédentes
    let nouvelleRue = {
        "nom" : nom,
        "nomRue" : nomRue,
        "disponibilite" : disponibilite,
        "heurePrise": heureIndiquee
    }
    
    //Si toutes les données sont existantes, on push dans le quartier selectionné et on enregistre en local puis on regenere
    if(nom != '' && nomRue != '' && heureIndiquee != ''){
        mesQuartiers[X].quartier.push(nouvelleRue);
        localStorage.setItem('mesQuartiers',JSON.stringify(mesQuartiers));
        generate(X);
    }
}

//Evenement au clique de la checkbox ADMIN pour vider le contenu de la page à chaque clique
let admin = document.getElementById('admin');
admin.addEventListener('click', function(){
    container.innerHTML ="";
    divForm.innerHTML = '';
})