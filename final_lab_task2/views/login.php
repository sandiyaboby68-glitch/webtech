<?php
session_start();
usernameError=$_SESSION["usernameError"] ?? "";
EmailError=$_SESSION["EmailError"] ?? "";
PasswordError=$_SESSION["PasswordError"] ?? "";
ConfirmPasswordError=$_SESSION["confirmPasswordError"] ?? "";

username=$_SESSION["username"] ?? "";
Password=$_SESSION["Password"] ?? "";
Email=$_SESSION["Email"] ?? "";
ConfirmPassword=$_SESSION["ConfirmPassword"] ?? "";

?>
<html>
    <head>
        <title>Registration</title>
        <body>
            <h2>login</h2>
            <form method="post" action="../Controller/ValidationModel.php">
            <table>
                <tr>
                    <td>Username</td>
                <td><input type="text" placeholder="Enter useername here"     value="<? echo $username;?>"/></td>
                <td><? php echo "$usernameError";?></td>
</tr>

<tr>
                    <td>Email</td>
                <td><input type="name" placeholder="Enter Email here" value="<? echo $Email;?>/"></td>
                <td><? php echo "$EmailError";?></td>
</tr>
<tr>
                    <td>Username</td>
                <td><input type="text" placeholder="Enter Password here" value="<? echo $Password;?>"/></td>
                <td><? php echo "$PasswordError";?></td>
</tr>
<tr>
                    <td>Confirm Password</td>
                <td><input type="text" placeholder="Enter Same Password again"     value="<? echo $ConfirmPassword;?>/"></td>
                <td><? php echo "$ConfirmPasswordError";?></td>
</tr>
<tr>
    <td></td>
    <td input type="submit" name=submit /></td>
</tr>
<table>
</form>
</body>
</html>



