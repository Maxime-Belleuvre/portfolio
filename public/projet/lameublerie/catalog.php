<?php  include "includes/header.php"?>
<?php include "includes/furnitureArray.php"?>


<?php
if(isset($_GET['type'])){
    $type = $_GET['type'];
?>
<?php
    if( $type === 'type'){
?>
    <h1 class="title-page"> Nos différents <?php echo $type ;?> de meubles</h1>
    <?php for($i=0; $i < count($typeFurniture); $i++){ ?>       
    <div class="article-furniture">
        <div class="article-furniture-title-container">
            <h3 class="article-furniture-title"><?php echo $typeFurniture[$i][$type] ;?></h3>
            <a href="catalogListType.php?type=<?php echo $typeFurniture[$i][$type];?>" class="btn-catalog" >EN SAVOIR PLUS</a>
        </div>
        <div class="article-furniture-picture-container">
            <?php 
                $compteur = 0;
                for($j=0; $j < count($furniture); $j++){
                if($furniture[$j][$type] == $typeFurniture[$i][$type]){
                    $compteur++;
                    if( $compteur >= 4){ break;}
                    if( !empty($furniture[$j]['image']) && !empty($furniture[$j]['image2'])){?>
                        <div class="article-furniture-slipt">
                            <div><img src="images/<?php echo $furniture[$j]['image'] ?>" alt=""></div>
                            <div><img src="images/<?php echo $furniture[$j]['image2'] ?>" alt=""></div>
                        </div>
              <?php }else{ ?>
                        <div><img src="images/<?php echo $furniture[$j]['image']; ?>" alt=""></div>
      <?php } 
            } 
            } 
            ?>

        </div>
        
        
    </div> 
<?php } } ?>

<?php
    if( $type === 'gamme'){
?>
    <h1 class="title-page"> Nos différents <?php echo $type ;?> de meubles</h1>
    <?php for($i=0; $i < count($gammeFurniture); $i++){ ?>       
    <div class="article-furniture">
        <div class="article-furniture-title-container">
            <h3 class="article-furniture-title"><?php echo $gammeFurniture[$i][$type] ;?></h3>
            <a href="catalogListgamme.php?type=<?php echo $gammeFurniture[$i][$type];?>" class="btn">EN SAVOIR PLUS</a>
        </div>
        <div class="article-furniture-picture-container">
            <?php 
                $compteur = 0;
                for($j=0; $j < count($furniture); $j++){
                if($furniture[$j]['gamme'] == $gammeFurniture[$i][$type]){
                    $compteur++;
                    if( $compteur >= 4){ break;}
                    if( !empty($furniture[$j]['image']) && !empty($furniture[$j]['image2'])){?>
                        <div class="article-furniture-slipt">
                            <div><img src="images/<?php echo $furniture[$j]['image'] ?>" alt=""></div>
                            <div><img src="images/<?php echo $furniture[$j]['image2'] ?>" alt=""></div>
                        </div>
              <?php }else{ ?>
                        <div><img src="images/<?php echo $furniture[$j]['image']; ?>" alt=""></div>
              <?php } } } ?>

        </div>
        
        
    </div> 
<?php } } ?>


<?php } ;?>
    
    <div>
        <a class="title-page sub-ligne" href="download/catalogueAmeublerie2022.pdf" target="_blank">Télécharger le Catalogue de l'Ameublerie !</a><br>
        <a class="title-page sub-ligne" href="download/conditionsGénéralesLocation.pdf" target="_blank">Télécharger les Conditions Générales de Location !</a>
    </div>
<?php  include "includes/footer.php"?>