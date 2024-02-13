var randomNumber1 = Math.floor(math.random() *6) + 1 ;     
var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomDiceSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomDiceSource);
