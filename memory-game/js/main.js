console.log("Up and running!");

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
]


function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard)
    document.getElementsByTagName("game-board")[0].this.appendChild(cardElement);
}
}



const cardsInPlay = []


function checkForMatch() {

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      }  else {
      console.log("Sorry, try again.");
    }
  }
}

function flipCard() {

  var cardID = document.getElementsByTagName("game-board")[0].this.getAttribute('data-id');

  console.log("User flipped " + cards.rank);
  console.log(cards.cardImage);
  console.log(cards.suit);


  cardsInPlay.push(cards[cardId.rank]);

  checkForMatch();


  document.getElementsByTagName("game-board")[0].this.setAttribute("src", cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!")
    } else {
      alert("Sorry, try again")
    }
  }
}

createBoard()
