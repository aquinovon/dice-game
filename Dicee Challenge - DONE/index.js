document.querySelector("button").addEventListener("click", respondToClick);

function respondToClick() {

    var randomNumber1 = Math.trunc(Math.random()  * 6 + 1); /* + 1 so doesn't get random to 0 */
    var randomNumber2 = Math.trunc(Math.random()  * 6 + 1);
    
    var leftDiceImage = document.querySelector(".img1");
    var rightDiceImage = document.querySelector(".img2");

    leftDiceImage.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    rightDiceImage.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}
