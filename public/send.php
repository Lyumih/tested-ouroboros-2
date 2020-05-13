<?php
$result = mail("hello@alghjghjhjmar.com","Message","\nE-mail: $_POST[email]", "From: admin@sitename.com \r\nContent-type: text/plain; charset=\"utf-8\"\r\n");

if ($result) {
    header("Location:index.html");
}
else{
    header("Location:index.html?status=false");
}
?>