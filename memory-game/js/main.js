console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"]
const cardsInPlay = []

let cardOne = cards[0]
let cardTwo = cards[2]
let cardThree = cards[1]
let cardFour = cards[3]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again")
  }
}
