<?php
$message_sent=false;
if(isset($_POST['email'])&& $_POST['email'] !=''){
    if(filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
      $name = $_POST['name'];
     $email = $_POST['email'];
    $message = $_POST['message'];
 require_once "Mail/phpmailer/class.PHPmailer.php";
 require_once "Mail/phpmailer/class.smtp.php";
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->Port=587;
    $mail->SMTPAuth=true;
    $mail->Username='omniaali9099@gmail.com';
    $mail->Password='ijrubbvezsjhrvyg';
    $mail->SMTPSecure='tls';
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("omniaali9099@gmail.com");
    $mail->Subject = ("$email");
    $mail->Body = $message;
     if($mail->send()){
     $message_sent=true;
     header("Location: contact.php");
     }
     else{
        ?>
    <script>
        alert("<?php echo "
            Something went wrong, please
            try again "?>");
    </script>
    <?php
     }

}

}?>

<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body style=" color: #333; display: grid; max-width: 100%; place-items: center;">
            <?php if($message_sent) {
    echo "<h3>Thank you for contacting us , will be in touch soon</h3>";}
    ?>
            <a style="width:300px" class="btnn" href="userdiary.php">Go back </a>

        </body>

        </html>
