//Sts variables for starter values
const scoreDisplay = document.querySelector('#currentScore');
const bestScoreDisplay = document.querySelector('#bestScore');
const newGame = document.querySelector('#newGame');
const reset = document.querySelector('#reset');
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'teal', 'pink'];


//For loop that loops over the cards indexes and stores them into a variable then splices 
for (let color of colors){
  const cards = [...document.querySelectorAll('.card')];
  const cardAIndex = parseInt(Math.random() * cards.length);//Converts a string to an interger
  const cardA = cards[cardAIndex]
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${color}`
  cardA.setAttribute('data-color', color);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += ` ${color}`
  cardB.setAttribute('data-color', color);
}
//Function that removes the hidden class from the div to show color name
function onCardClicked(e){
  const target = e.currentTarget;
  if(
    preventClick || 
    target === clickedCard || 
    target.className.includes('done')){
    return;
  }
  target.className = target.className
  .replace('color-hidden', '')
  .trim()
  target.className += ' done';

 // If statement that determines if we havent clicked a card, keep track of the card, display its color
if (!clickedCard) {
  clickedCard = target;
} else if(clickedCard){
// If we have already clicked a card, check if new card matches the old card color
  if (
    clickedCard.getAttribute('data-color') !== 
    target.getAttribute('data-color')
    
  ) {
    console.log('cards not equal');
    preventClick = true;
    //Sets a timer for 1 sec if colors are true or false
    setTimeout(() => {
      clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
      target.className = target.className.replace('done', '').trim()  + ' color-hidden';
      clickedCard = null;
      preventClick = false;
    }, 1000);
    
  } else {
    combosFound++
    clickedCard = null;
    if (combosFound === 8)
    alert('YOU WIN!!')
  }
  }
}

//Resets game
if (localStorage.getItem('highScore')) {
  highScore = parseInt(localStorage.getItem('highScore'));
} else {
  highScore = 1000;
  localStorage.setItem('highScore', highScore);
}//checks for highscore, if none in localstorage, then sets to 1000 in localstorage

highScoreDisplay.innerText = highScore;

newGame.addEventListener('click', function (e) {
  window.location.reload();
})//new game button reloads page
reset.addEventListener('click', function (e) {
  highScore = 1000;
  localStorage.setItem('highScore', highScore);
  highScoreDisplay.innerText = highScore;
})//reset high score button changes back to 1000