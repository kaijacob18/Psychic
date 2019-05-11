var win = 0;
var lose = 0;
var left = 9;

var letter =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.getElementById("win").innerHTML="win " + win;
document.getElementById("lose").innerHTML="lose " + lose;
document.getElementById("left").innerHTML="guesses left: " + left;
document.getElementById("far").innerHTML="your guesses so far: ";

document.onkeyup = function (){

    var compGuess="";
    var ran = Math.floor(Math.random() * 26);
    console.log(ran);
    compGuess = letter[ran];

    var guess = event.key;
    document.getElementById("far").innerHTML += guess;
    left --;

    if(guess == compGuess){

        win++;

        alert("You Won!, your winning letter is " + guess);
        left = 9;

        document.getElementById("far").innerHTML = "your guesses so far: ";

    }
if (left == 0) {
    lose++;

    alert("you lost");
    left = 9;
    document.getElementById("far").innerHTML = "your guesses so far: ";

}
document.getElementById("win").innerHTML = "win " + win;
document.getElementById("lose").innerHTML = "lose " + lose;
document.getElementById("left").innerHTML = "guesses left " + left;
}

