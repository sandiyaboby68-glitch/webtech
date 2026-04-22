console.log("connect");
var count=0;
function collectData(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    console.log("Collect Data from form");
    console.log(email);
    console.log(password);

if(!email.includes("@")){
    document.getElementById("emailerror").innerHTML="@ is required in email";
    count++;
}

else{
    document.getElementById("emailerror").innerHTML="";
}

if (!password){
    document.getElementById("passworderror").innerHTML="Email is required";
    count++;
    
}
if(passsword.length<6){
    
}
else{
    document.getElementById("passworderror").innerHTML="";
}
document.write("Count..", count);
return false;
}