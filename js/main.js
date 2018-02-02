
console.log("Up and running!");




//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

var cards =["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardsInPlay= [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("The user flipped " + cardOne);
console.log("The user flipped " + cardTwo);

if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	
	}
}

