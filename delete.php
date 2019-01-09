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
$sql2 = "SELECT * FROM USERS";
$gasit = $_GET['name'];
$ok = 0;
$result = $conn->query($sql2);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        if ( $row['user']== $gasit)
                $ok = 1;
    }
}



if ($ok == 1){
$sql = "DELETE FROM USERS where user = '".$_GET['name']."'";

if ($conn->query($sql) === TRUE) {
    echo "user-ul ".$_GET['name']." a fost sters";
} else {
    echo "Eroare : " . $conn->error;
}
}
else echo "user-ul ".$_GET['name']." nu exista";
$conn->close();
?>