<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webp";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}   

session_start();

$sql = "update USERS set pass='".$_GET['name']."' where user = '".$_SESSION['name']."'";

if ($conn->query($sql) === TRUE) {
    echo "user-ul ".$_SESSION['name']." a fost updatat";
} else {
    echo "Eroare : " . $conn->error;
}

$conn->close();
?>