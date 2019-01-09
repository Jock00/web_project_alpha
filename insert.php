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
$sql1 = "SELECT * form USERS where user = '".$_GET['name']."'";

if ($conn->query($sql1) === TRUE){
    echo "user-ul ".$_GET['name']." exista";
}
else 
    
{
    $sql = "INSERT INTO USERS (user,pass) values ('".$_GET['name']."','".$_GET['pass']."')";

if ($conn->query($sql) === TRUE) {
    echo "user-ul ".$_GET['name']." a fost adaugat";
} else {
   echo "user-ul ".$_GET['name']." exista";
}
}
    
   
$conn->close();
?>