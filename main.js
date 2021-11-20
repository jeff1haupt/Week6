class Player {
    constructor(name) {
        this.name = name; 
        this.score = 0; 
        this.hand = [];
    }

    //Used for MOCHA/CHAI testing
    getPlayerName() {
        return this.name;
    }

    drawCard() {
        return this.hand.pop();
    }

    // method to increment score based on winning 
    incrementScore() {
        this.score += 1;
    }
}

class Card {
    constructor(value, cardName) {
        this.value = value;
        this.cardName = cardName;
    }
    // a value 
    // a method to describe each card
    describe() {
        return `${this.cardName} is equal to a value of ${this.value}`
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
    }
    createDeck() {
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 2; j <=14; j++) {
                if ( j == 11 ) {
                    this.cards.push(new Card(j, `Jack of ${this.suits[i]}`)); 
                } else if ( j == 12 ) {
                    this.cards.push(new Card(j, `Queen of ${this.suits[i]}`)); 
                } else if ( j == 13 ) {
                    this.cards.push(new Card(j, `King of ${this.suits[i]}`));
                } else if ( j == 14 )  {
                    this.cards.push(new Card(j, `Ace of ${this.suits[i]}`));
                } else {
                    this.cards.push(new Card(j, `${j} of ${this.suits[i]}`));
                }
            }
        }
    }
    // an array of cards 
    // build out the nested for-loops in the Deck and create each card instance within that loop
    // push each instance to array of cards 
    // a method to shuffle the cards 
    // a method to deal the cards to each player
}

class PlayGame { // this could be just a function or many functions
    // start the game method
    // play again or restart the game method 
    // create 2 play instances 
    // method to check which hand won 
    // method to check which player one 

    playRound() {
        //run method 26 times 
         let player1Card = player1.drawCard();
         let player2Card = player2.drawCard();
            
            //During the game - each round
            if (player1Card.value > player2Card.value) {
                player1.incrementScore();
            } 
     }

     //Final check of score - would only run once
    whoWins() {
        if (player1.score > player2.score) {
            console.log("Player 1 wins")
        }
    }
}

const gameDeck1 = new Deck();
const gameDeck2 = new Deck();
gameDeck1.createDeck();
console.log(gameDeck1);
gameDeck2.createDeck();
console.log(gameDeck2);
console.log(gameDeck1.cards[2].describe());
// for(let i = 0; i < gameDeck.length; i++) {
//     console.log(gameDeck.cards[i].describe);
// }

const player1 = new Player("Jeff");
const player2 = new Player("Lisa");






