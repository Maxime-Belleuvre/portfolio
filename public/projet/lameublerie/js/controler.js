/*************************** controler slide carrousel*********************/
if(widthScreen < 768){
    document.body.onload = setInterval(function(){slideRPhone()}, 2000);
}else if( widthScreen >= 768 && widthScreen < 1120){
    document.body.onload = setInterval(function(){slideRTablet()}, 2000);
}

burger.addEventListener( 'click', function(){
    manageHeader();
})

btnCatalog.addEventListener('click', function(){
    manageCatalog();
})

