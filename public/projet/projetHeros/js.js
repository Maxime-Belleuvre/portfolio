let cf = document.getElementById("container");
let ligneRow = "";
function generate(){
    cf.innerHTML = "";

    for( let i=0; i<=mesHeros.members.length-1; i++){
        
        // boucle qui crée une ligne une itération sur deux
        if(i%2 == 0){
            let maRow = document.createElement("div");
            ligneRow = maRow;
            ligneRow.classList.add("row");
            cf.appendChild(ligneRow);
        }
        //crée une col a chaque passage dans la boucle
        let maCol = document.createElement("div");
        maCol.classList.add("col-6", "card", "text-white", "bg-dark", "h-100", "espace");            
        ligneRow.appendChild(maCol);

        //Crée un paragraphe avec les noms des heros
        /*let nomHero = document.createElement("p");
        nomHero.textContent = mesHeros.members[i].name;
        maCol.appendChild(nomHero);*/

        //Crée un paragraphe avec les identités des heros
        /*let identite = document.createElement("p");
        identite.textContent = mesHeros.members[i].secretIdentity;
        maCol.appendChild(identite);*/

        // liste des pouvoir dans heros => membres => pouvoirs
        let liste = document.createElement("ul");
        let powers = mesHeros.members[i].powers;
        for(let j=0; j<powers.length; j++){
            let pouvoir = document.createElement("li");
            pouvoir.textContent =  powers[j];
            liste.appendChild(pouvoir);
        }

        //ramene les images depuis le json
        let img = document.createElement("img");
        img.classList.add("card-img-top","format")
        img.src = mesHeros.members[i].photos;
        img.alt = "photos de " + mesHeros.members[i].name;
        maCol.appendChild(img);

        //cree le card body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        //cree le titre de la card
        let titre = document.createElement("h5");
        titre.classList.add("card-title");
        titre.textContent= mesHeros.members[i].name +" "+ mesHeros.members[i].age+ "ans";
        cardBody.appendChild(titre);
        maCol.appendChild(cardBody);

        // cree le contenue de la card
        let identite = document.createElement("p");
        identite.classList.add("class-text");
        identite.textContent = mesHeros.members[i].secretIdentity;
        cardBody.appendChild(identite);
        identite.appendChild(liste);


        let delButton =document.createElement("button");
        delButton.classList.add("btn", "btn-danger");
        delButton.textContent = "supprimer";
        delButton.addEventListener("click",function(){
            mesHeros.members.splice(i,1);
            localStorage.setItem("mesHeros", JSON.stringify(mesHeros));
            generate();
        })
        maCol.appendChild(delButton);
    }
}




function creeHero(){
    let carac1Hero = document.getElementById("carac1").value;
    let carac2Hero = document.getElementById("carac2").value;
    let carac3Hero = document.getElementById("carac3").value;
    let carac4Hero = document.getElementById("carac4").value;
    let pouvoir1Hero = document.getElementById("pouvoir1").value;
    let pouvoir2Hero = document.getElementById("pouvoir2").value;
    let pouvoir3Hero = document.getElementById("pouvoir3").value;
    /*function creHero(nom,age,idetité,photos,pouvoirs1,pouvoirs2,pouvoirs3){
            this.name = nom;
            this.age = age;
            this.secretIdentity = idetité;
            this.photos = photos;
            this.powers = [pouvoirs1,pouvoirs2,pouvoirs3];
    }
    let nouvelHero = new creHero(carac1Hero,carac2Hero,carac3Hero,carac4Hero,pouvoir1Hero,pouvoir2Hero,pouvoir3Hero);
    console.log(nouvelHero);*/
    let nouvelHero={
        "name":carac1Hero,
        "age": carac2Hero,
        "secretIdentity": carac3Hero,
        "photos" : carac4Hero, 
        "powers": [
            pouvoir1Hero,
            pouvoir2Hero,
            pouvoir3Hero
        ]
    }
    mesHeros.members.push(nouvelHero);
    localStorage.setItem("mesHeros", JSON.stringify(mesHeros));
    generate();
    
}

/*function supprHero(maCol){
    maCol.remove();

}
*/

function isMesHerosSet(){
    var heros = localStorage.getItem("mesHeros");
    console.log(heros);
        if(heros != ""){
            mesHeros = JSON.parse(heros);
            generate();
        }
}


/*isMesHerosSet()*/
generate();
