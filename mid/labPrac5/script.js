console.log("connected")
function analyzeText(){
    var text=document.getElementById("textInput").value;
    var errorMsg=document.getElementById("errorMsg");
    if(text.trim() == ""){
       errorMsg.innerHTML="Please Enter Text";

       document.getElementById("charCount").innerHTML=0;
       document.getElementById("wordCount").innerHTML=0;
       document.getElementById("reversedText").innerHTML= "";
       return;
    }

errorMsg.innerHTML= "";

var characters= text.length;
var words= text.trim().split(/\s+/).length;
var reversed=text.split("").reverse().join("");
document.getElementById("charCount").innerHTML=characters;
document.getElementById("wordCount").innerHTML= words;
document.getElementById("reversedText").innerHTML=reversed;
}