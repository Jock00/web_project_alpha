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
$sql = "SELECT * FROM USERS where user = '".$_GET['name']."' AND pass = '".$_GET['pass']."'";

    


$result = $conn->query($sql);
if($result){
if ($result->num_rows > 0) {

   
    setcookie('name', $_GET['name'], time() + (86400 * 30)); 
    session_start();
    $_SESSION['name']=$_GET['name'];
      header('Location: second.html');
    
}
else{
    
 echo "<script>document.getElementById(\"response\").style.visibility =\"visible\";";
    header('Location:index.html');
}
}
$conn->close();
$me = 3;
?>