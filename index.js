function asliFunction(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);


console.log(randomNumber1);

var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2  + ".png";//ek hi me kar dia alag se var banane ki bajay
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML ="PLAYER 1 WINS🎉";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="PLAYER 2 WINS🎉";
}
else{
    document.querySelector("h2").innerHTML="DRAW !!";
}
}
function myFunction(){
    var element= document.body;
    element.classList.toggle("whitemode");
    var modeButton = document.getElementById("modeButton");
    if (element.classList.contains("whitemode")) {
      modeButton.textContent = "DARK MODE"; // Change to the text you want in white mode
    } else {
      modeButton.textContent = "LIGHT MODE"; // Change to the text you want in dark mode
    }
  }
    
    
