console.log("connected");

function collectData() {
    let count = 0;  


    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    if(email === "") {
        document.getElementById("emailerror").innerHTML = "Email is required";
        count++;
    } 
    else if(!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailerror").innerHTML = "Enter a valid email address";
        count++;
    } 
    else {
        document.getElementById("emailerror").innerHTML = "";
    }


    if(password === "") {
        document.getElementById("passworderror").innerHTML = "Password is required";
        count++;
    } 
    else if(password.length < 6) {
        document.getElementById("passworderror").innerHTML = "Password must be at least 6 characters";
        count++;
    } 
    else {
        document.getElementById("passworderror").innerHTML = "";
    }

   
    if(confirmpassword !== password) {
        document.getElementById("confirmerror").innerHTML = "Passwords must match";
        count++;
    } 
    else {
        document.getElementById("confirmerror").innerHTML = "";
    }


    if(count > 0) {
        return false;
    }


    alert("Registration Successful!");
    return true;
}