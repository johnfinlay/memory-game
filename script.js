const gameContainer = document.getElementById("game");
const btnNew = document.querySelector('#btn-new');
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
let shuffledColors = [];
let clickedCards = [];
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //console.log(event.target.style.backgroundColor);
  // are 2 cards already clicked? clickedCards.length
  if (clickedCards.length > 1 || event.target.style.backgroundColor === event.target.classList[0]) {
    return false;
  }
  clickedCards.push(event.target);
  event.target.style.backgroundColor = event.target.classList[0];
  if (clickedCards.length === 2) {
    if (clickedCards[0].style.backgroundColor === clickedCards[1].style.backgroundColor) {
      clickedCards = [];
    } else {
      setTimeout(function () {
        clickedCards[0].style.backgroundColor = 'white';
        clickedCards[1].style.backgroundColor = 'white';
        clickedCards = [];
      }, 1000);
    }

  }
  //is this card already clicked? backgroundColor===class color?

  //if 1 card already clicked, do colors match ? leave them alone & empty clickedCards array : show this card

}

btnNew.addEventListener('click', function (event) {
  gameContainer.innerHTML = '';
  shuffledColors = shuffle(COLORS);
  clickedCards = [];
  createDivsForColors(shuffledColors);
});

// when the DOM loads



/* */