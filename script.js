const rollBtn = document.querySelector('.roll-button');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector("h1");

const determineWinner = () => {
    let die1roll = Math.floor(Math.random()*6) +1;
    let die2roll = Math.floor(Math.random()*6)+1;
    img1.setAttribute('src', `./images/dice${die1roll}.png`);
    img2.setAttribute('src', `./images/dice${die2roll}.png`);
    if (die1roll > die2roll) {
        h1.textContent = "Player 1 Wins!";
    } else if (die2roll > die1roll){
        h1.textContent = "Player 2 Wins!";
    } else if (die1roll === die2roll){
        h1.textContent = "Draw!"
    }
    console.log(die1roll);
}



rollBtn.addEventListener('click', determineWinner)
