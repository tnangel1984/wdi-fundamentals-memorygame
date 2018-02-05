
//console.log("Up and running!");




// arrays for card options with an object representing each card.
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

//empty array for card selection
var cardsInPlay= [];
var plays = 0;
var wins = 0;
var losses = 0;
var message ="";
var resultingMessage = "";


//Once selected cards have been added to the array, will check for match.

function checkForMatch(){

  if(cardsInPlay.length === 2){
    plays += 1;
    
		if(cardsInPlay[0] === cardsInPlay[1]){
      wins += 1;
      var scoreMessage ="You have won: " +wins+ " times and lost: " +losses+ " times out of: "+plays+ " games.";
      alert("You found a match! \n"+ scoreMessage);
		}else{
      losses += 1;
      var scoreMessage ="You have won: " +wins+ " times and lost: " +losses+ " times out of: "+plays+ " games.";
			alert("Sorry, try again. \n"+ scoreMessage);
     
		
		}   
     
	}

}

//For the card clicked ("this"), gets the index# and sets the src to the cardimage property. adds selected card to array InPlay, calls check for match funciton above.
function flipCard (){
  cardId = this.getAttribute("data-id")
  this.setAttribute("src", cards[cardId].cardImage)

	console.log("The user flipped " +  cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
  cardsInPlay.push(cards[cardId].rank);
  
  console.log(checkForMatch());

}

//selects all the card elements puts them in an array getCardElements. 
//Selects each img element in the array and changes the src attribute to back.png.
//Sets the cardsInPlay array to empty.
 function resetBoard(){
   cardsInPlay = [];
   getCardElements = document.getElementsByTagName("img");    
    for(i=0; i<getCardElements.length; i++){
      getCardElements[i].setAttribute("src", "images/back.png");
    }
    console.log(cardsInPlay.length);
}

//creates img elements with src and data-id properties, adds an eventhandler and appends them to the div id="game-board"
function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    
    document.getElementById("game-board").appendChild(cardElement); 
  }

  resetElement = document.createElement("input");
  resetElement.setAttribute("type", "button");
  resetElement.setAttribute("value", "Reset");
  resetElement.setAttribute("id", "resetButton");
    //repetition?
  resetElement.addEventListener("click", resetBoard);
  document.getElementById("game-board").appendChild(resetElement);

}
 


function score(){

  // would want to count the # of times the alert is triggered.
  // would need a separte reset score button
  // would need to publish the score results
}


createBoard();















