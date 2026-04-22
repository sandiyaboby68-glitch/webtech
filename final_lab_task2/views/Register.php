<?php
session_start();
$usernameError=$_SESSION["usernameError"] ?? "";
$EmailError=$_SESSION["EmailError"] ?? "";
$PasswordError=$_SESSION["PasswordError"] ?? "";
$ConfirmPasswordError=$_SESSION["ConfirmPasswordError"] ?? "";

$username=$_SESSION["username"] ?? "";
$Password=$_SESSION["Password"] ?? "";
$Email=$_SESSION["Email"] ?? "";
$ConfirmPassword=$_SESSION["ConfirmPassword"] ?? "";

unset($_SESSION["usernameError"]);

unset($_SESSION["PasswordError"]);

unset($_SESSION["EmailError"]);

unset($_SESSION["ConfirmPasswordError"]);
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
                <td><input type="text" name=username placeholder="Enter useername here"/></td>
                <td><?php echo "$usernameError";?></td>
</tr>

<tr>
                    <td>Email</td>
                <td><input type="email" name=Email placeholder="Enter Email here"></td>
                <td><?php echo "$EmailError";?></td>
</tr>
<tr>
                    <td>Username</td>
                <td><input type="text" name=Password placeholder="Enter Password here"/></td>
                <td><?php echo "$PasswordError";?></td>
</tr>
<tr>
                    <td>Confirm Password</td>
                <td><input type="text" name=ConfirmPassword placeholder="Enter Same Password again"></td>
                <td><?php echo "$ConfirmPasswordError";?></td>
</tr>
<tr>
    <td></td>
    <td><input type="submit" name="submit" ></td>
</tr>
</table>
</form>
</body>
</html>



