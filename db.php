<?php
$link = mysqli_connect("localhost", "root", "","email_db");

 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
 
$sql = "INSERT INTO user ( email) VALUES ( '$email')";
if(mysqli_query($link, $sql)){
    
    header("Location: our_story.html");
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
mysqli_close($link);
?>
