//console.log("Up and running!");




// arrays for card options and selected cards.
var cards =[
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
    cardImage:"images/king-of-hearts.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }

];


var cardsInPlay= [];


//Once selected cards have been added to the array, will check for match.
function checkForMatch(){
  if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }else{
      alert("Sorry, try again.");
    
    }
  }

}

//returns card selection, adds selection to array InPlay, calls check for match funciton above.
function flipCard (cardId){
  console.log("The user flipped " +  cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  console.log(checkForMatch());
}


//console.log(flipCard(0));
//console.log(flipCard(2));
console.log(document.getElementById("game-board"));













