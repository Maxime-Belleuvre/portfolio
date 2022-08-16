<?php  include "includes/header.php"?>
    
    <div class="breadCrumb">
        <a href="index.php#positionLoad"> ACCEUIL </a>
        <span> > </span>
        <a href="contact.php#positionLoad"> CONTACT </a>
    </div>

    <div class="contentContact">
        <form method="post">
            <label for="name">Votre Nom*</label>
            <input type="text" name="name" id="name" required>
            <label for="email">Votre email*</label>
            <input type="mail" name="mail" id="email"required>
            <label for="object">L'objet de votre message*</label>
            <input type="text" name="object" id="object" required>
            <label>Êtes vous un :* </label>
            <div class="contact-radio">
                <input type="radio" name="type" id="particular" value="particulier">
                <label for="particular">Particulier</label>
                <input type="radio" name="type" id="professional" value="profesionel">
                <label for="professional">Professionel</label>
            </div>
            <label for="message">Votre message*</label>
            <textarea name="message" row="8" col="50" id="message" required></textarea>
            <input type="submit" name="envoyer" class="btnInput">
            <div class="row">
                <input type="checkbox" name="check" id="check" required>
                <label for="check">En envoyant le formulaire vous acceptez que l'Ameublerie utilise les données transmise pour vous recontactez *</label>
            </div>
            <label  class="text-center">les champs disposant du symbole * sont obligatoires</label>
        </form>

        <?php 

            if ( isset($_POST['envoyer'])){
                
                $name = htmlspecialchars($_POST['name']);
                $mail = htmlspecialchars($_POST['mail']);
                $object = htmlspecialchars($_POST['object']);
                $message = htmlspecialchars($_POST['message']);
                $typeClient = htmlspecialchars($_POST['type']);
                $check = $_POST['check'];


                if(isset($name) && isset($object) && isset($mail) && isset($message) && isset($check)){
                    if( !empty($name) && !empty($mail) && !empty($object) && !empty($message)){
                        $messageInForm = '<h1>Message envoyé depuis la page Contact de lameublerie.eu</h1>';
                        $messageInForm .= '<p><b>Email : </b>' . $mail . '<br> 
                        <b>Nom :</b>'. $name .'<br>
                        <b>Type de client :</b>'. $typeClient .'<br>
                        <b>Objet :</b>.'. $object.'<br>
                        <b>Message : </b>' . $message . '</p>';
        
                        $header = 'MIME-Version: 1.0' . "\r\n";
                        $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                        $header .= 'From: maximebelleuvre14200@gmail.com'/*mail d'envoie*/ . "\r\n";
                        $header .= 'Reply-to: ' . $mail;
        
                        $send = mail('maxime.belleuvre@laposte.net'/*mail de récupération*/ ,'contact depuis site lameublerie.eu', $messageInForm , $header );
        
                        if($send){?>

                            <h2 class="sub-title-page"> <?php echo'Votre message a bien été envoyé.'; ?></h2>
                            
                        <?php }    
                    }else{
                        echo 'Merci de ne pas changer le HTML du site';
                    }
                }else{
                    echo 'Merci de ne pas changer le HTML du site';
                }
               
            }
        ?>
    </div>

    
<?php  include "includes/footer.php"?>