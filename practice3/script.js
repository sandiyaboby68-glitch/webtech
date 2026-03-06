console.log("connected");
var images=[
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];
var index=0;

function showImage(){
document.getElementById("mainImage").src=images[index];
}
function next(){
    index++;
    if(index>=images.length){
        index=0;
    }
showImage();
}
function previous(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    showImage();
}
setInterval(next,3000)