let widthScreen = visualViewport.width;

/*************** manage carrousel slide  ***************/

let contain = document.getElementById('contain');
let compteurCarrousel = 1;


function slideRPhone(){
    if(compteurCarrousel<3){

        contain.style.transform = "translate(-"+compteurCarrousel*300+"px)";
        compteurCarrousel++;

    }else if(compteurCarrousel == 3){
        compteurCarrousel = 1;
        contain.style.transform = "translate("+0+"px)";
    }
}

function slideRTablet(){
    if(compteurCarrousel<2){

        contain.style.transform = "translate(-"+compteurCarrousel*450+"px)";
        compteurCarrousel++;

    }else if(compteurCarrousel == 2){
        compteurCarrousel = 1;
        contain.style.transform = "translate("+0+"px)";
    }
    
}

function slideRComputer(){
    if(compteurCarrousel<3){

        contain.style.transform = "translate(-"+compteurCarrousel*300+"px)";
        compteurCarrousel++;

    }else if(compteurCarrousel == 3){
        compteurCarrousel = 1;
        contain.style.transform = "translate("+0+"px)";
    }
}

/*************** manage carrousel slide  ***************/

const txtAnim = document.getElementById('subTitleHeader');

new Typewriter(txtAnim, {
    deleteSpeed:20,

})

.changeDelay(20)
.typeString('Découvrir, ')
.pauseFor(150)
.typeString('Réaliser, ')
.pauseFor(300)
.typeString('Agir, ')
.pauseFor(150)
.typeString('Accompagner, ')
.pauseFor(300)
.typeString('Ensemble')
.pauseFor(150)
.start()







/***************** DEBUT GESTION MENU HEADER *******************/
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const btnCatalog = document.getElementById('btnCatalog');

function manageCatalog (){
    document.getElementById('navSubMenu').classList.toggle('nav-block');
    document.getElementById('arrow').classList.toggle('manage-nav-arrow');
}

function manageHeader(){
    document.getElementById('nav').classList.toggle('manage-nav');
    document.getElementById('bar1').classList.toggle('open-first');
    document.getElementById('bar2').classList.toggle('open-second');
    document.getElementById('bar3').classList.toggle('open-third');
    document.querySelector('header').classList.toggle('new-height-header');
    document.querySelector('body').classList.toggle('lock-header');
    
    if(widthScreen >= 1200){
        document.getElementById('containerTitle').classList.toggle('manage-container-title-computer');

    }
    else if(widthScreen < 1200){
        document.getElementById('containerTitle').classList.toggle('manage-container-title');
    }
};