<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'mailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputPhone']) && isset($_POST['inputMessage'])) {

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('stroydrew@mail.com'); //recipient
    $mail->Subject = $_POST['inputName'];
    $mail->Body = "Phone: " . $_POST['inputPhone'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $formData = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($formData);
        exit;
    }

    $formData = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($formData);

} else {

    $formData = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($formData);

}
