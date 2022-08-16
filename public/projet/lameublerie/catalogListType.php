<?php  include "includes/header.php";?>
<?php include "includes/furnitureArray.php";?>


<?php
if(isset($_GET['type'])){
    $type = $_GET['type'];
?>
    <h1 class="title-page">Les <?php echo $type ;?></h1>


    <div class="positionCarousel">
        <img src="images/transat.jpg" alt="">

    </div>
    
<?php
}
?>
    <div class="jump"></div>

    <div>
        <a class="title-page sub-ligne" href="download/catalogueAmeublerie2022.pdf" target="_blank">Télécharger le Catalogue de l'Ameublerie !</a><br>
        <a class="title-page sub-ligne" href="download/conditionsGénéralesLocation.pdf" target="_blank">Télécharger les Conditions Générales de Location !</a>
    </div>
    
<?php  include "includes/footer.php";?>