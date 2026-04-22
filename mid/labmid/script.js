console.log("connected");

var count=0;
var virtualcount=0;
var inpercount=0;

function registeruser() {
 var name= document.getElementById("name").value;
var email=document.getElementById("email").value;
var company =document.getElementById("company").value;
var radios=document.getElementsByName("attendance");
var attendance=null;
for(var i=0; i<radios.length; i++){
    if(radios[i].checked){
        attendance=radios[i].value;
        break;
    }
}
var valid=true;

if(name.length<6){
    document.getElementById("nameerror").innerHTML="Name must be greater than 6";
    valid=false;
}
else if(name.length>100){
    document.getElementById("nameerror").innerHTML="name must be less than 100 character";
    valid=false;
}else{
    document.getElementById("nameerror").innerHTML="";
}

if(!email.includes("@")){
    document.getElementById("emailerror").innerHTML="please enter a valid email";
    valid=false;
}else if(!email.includes(".")){
    document.getElementById("emailerror").innerHTML="please enter a valid professional email";
    valid=false;
}else{
    document.getElementById("emailerror").innerHTML="";
}

if(company.length>100){
    document.getElementById("companyerror").innerHTML="Maximun 100 character allowed";
    valid=false;
}else{
    document.getElementById("companyerror").innerHTML="";
}
if(attendance == null){
    document.getElementById("attendanceerror").innerHTML="Please select attendence type ";
    valid=false;
    
}else{
    document.getElementById("attendanceerror").innerHTML="";
}

if(valid){
    count++;
    if(attendance === "Virtual"){
        virtualcount++;
    }else{
        inpercount++;
    }

document.getElementById("total").innerHTML= count;
document.getElementById("virtual").innerHTML= virtualcount;
document.getElementById("inperson").innerHTML= inpercount;
alert("Registration is succesfull!");
document.getElementById("registrationForm").reset();

}
return false;
}function toggleanalytics(){
    var panel=document.getElementById("analyticspanel");
    var button=document.getElementById("analyticsbutton");
    if(panel.hidden){
        panel.hidden=false;
        button.innerHTML="Hide Event Analytics";
    }
    else{
        panel.hidden=true;
        button.innerHTML="Show Event Analytics";
    }
}