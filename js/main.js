
console.log("Up and running!");




// arrays for card options and selected cards.
var cards =["queen", "queen", "king", "king"];
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
	console.log("The user flipped " +  cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	console.log(checkForMatch());
}


console.log(flipCard(0));
console.log(flipCard(1));
