var mode = "light";

function toggleMode(){

var body = document.getElementById("body");
var header = document.getElementById("header");

var btn = document.getElementById("btn");

if(mode == "light"){

body.style.backgroundColor = "black";
body.style.color = "white";

header.style.borderColor = "white";


btn.innerHTML = "Switch to Light Mode";

mode = "dark";
}

else{

body.style.backgroundColor = "white";
body.style.color = "black";

header.style.borderColor = "black";

btn.innerHTML = "Switch to Dark Mode";

mode = "light";
}

}