<?php
session_start();
$username=$_POST["username"] ?? "";
$Email=$_POST["Email"] ?? "";
$Password=$_POST["Passsword"] ?? "";
$ConfirmPassword=$_POST["ConfirmPassword"] ?? "";
$hasusernameError="true";
$hasEmailError="true";
$hasPasswordError="true";
$hasConfirmPasswordError="true";



if(!$username){
    $_SESSION["usernameError"]="username is required";
    $hasusernameError="true";

}elseif(strlen($username)<3){
    $_SESSION["usernameError"]="username must have minimum 3 character";
}else{
unset($_SESSION["usernameError"]);
  $hasusernameError="false";

}

if(!$Email){
    $_SESSION["EmailError"]="Email is required";
    $EmailError="true";

}else{
unset($_SESSION["EmailError"]);
  $hasEmailError="false";

}

if(!$Password){
    $_SESSION["PassswordError"]="Password is required";
    $hasPasswordError="true";

}elseif(strlen($username)<6){
    $_SESSION["PasswordError"]="Password must have minimum 6 character";
}else{
unset($_SESSION["PasswordError"]);
  $hasPasswordError="false";

}
if(!$ConfirmPassword){
    $_SESSION["ConfirmPassswordError"]="Password is required";
    $hasConfirmPasswordError="true";

}elseif($Password !==$ConfirmPassword){
    $_SESSION["ConfirmPasswordError"]="Password must be same";
}else{
unset($_SESSION["ConfirmPasswordError"]);
  $hasConfirmPasswordError="false";

}
if($hasusernameError||$hasPasswordError||$hasEmailError||$hasConfirmPasswordError){
    $_SESSION["username"]=$username;
      $_SESSION["Email"]=$Email;
        $_SESSION["Password"]=$Password;
          $_SESSION["ConfirmPassword"]=$Password;
          HEADER("Location: ../Views/Register.php");

}else{
 HEADER("Location: ../Views/dashboard.php");
 exit();

}
?>