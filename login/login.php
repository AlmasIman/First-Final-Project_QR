<?php
session_start();

include("connection.php");
include("functions.php");

if($_SERVER['REQUEST_METHOD'] == "POST")
{
   $user_name = $_POST['user_name'];
   $password = $_POST['password'];

   if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
   {
      //read from db
       $query = "select * from users where user_name = '$user_name' limit 1";
       
       $result = mysqli_query($con, $query);
         
       if($result)
       {
          if($result && mysqli_num_rows($result) > 0)
          {
               $user_data = mysqli_fetch_assoc($result);
            
            if($user_data['password'] === $password)
            {
                $_SESSION['user_id'] = $user_data['user_id'];
                header("Location: index.php");
                die;         
            }
          }
       }
       
   }else
   {
       echo "Please enter some valid information!";
   }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style type="text/css">
        #text{
            height: 25px;
            border-radius: 5px;
            padding: 4px;
            border: solid thin #aaa;
            width: 100%;
        }
        #button{
            padding: 10px;
            width: 100px;
            color: white;
            background-color: lightblue;
            border: none;
        }
        #box{
            background-color: grey;
            margin: auto;
            width: 300px;
            padding: 20px;
        }
        #login{
            font-size: 20px;
            margin: 10px;
            color: white;
        }
    </style>

    <div id="box">
        <form method="post">
            <div id="login">Login</div>
            <input id="text" type="text" name="user_name">
            <br><br>
            <input id="text" type="password" name="password">
            <br><br>
            <input id="button" type="submit" value="Login">
            <br><br>
            <a href="signup.php">Signup</a>
        </form>
    </div>
</body>
</html>