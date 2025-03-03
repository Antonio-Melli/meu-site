<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die(json_encode(['status' => 'error', 'message' => 'Acesso inválido!']));
}

if (!isset($_POST["nome"], $_POST["email"], $_POST["assunto"], $_POST["mensagem"])) {
    die(json_encode(['status' => 'error', 'message' => 'Dados incompletos!']));
}

$nome = $_POST["nome"];
$email = $_POST["email"];
$assunto = $_POST["assunto"];
$mensagem = $_POST["mensagem"];

$mail = new PHPMailer(true);
$config = require 'configexample.php';

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $config['email_user'];
    $mail->Password = $config['email_pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($email, $nome);
    $mail->addAddress('***********');

    $mail->isHTML(true);
    $mail->Subject = $assunto;
    $mail->Body = "<strong>Nome:</strong> $nome <br><strong>E-mail:</strong> $email <br><strong>Mensagem:</strong> $mensagem";

    if (!$mail->send()) {
        die(json_encode(['status' => 'error', 'message' => 'Erro ao enviar e-mail: ' . $mail->ErrorInfo]));
    }

    die(json_encode(['status' => 'success', 'message' => 'Mensagem enviada com sucesso!']));
} catch (Exception $e) {
    error_log("Erro ao enviar e-mail: {$mail->ErrorInfo}"); // Log de erro para depuração
    die(json_encode(['status' => 'error', 'message' => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]));
}
?>