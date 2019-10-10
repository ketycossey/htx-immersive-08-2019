
let gameStart= false;
gameOver = false;
playWon = false;
var dealerHand= [];
var playerHand=[];
dealerScore =0;
playerScore = 0;
var suits = ['spades', 'hearts', 'diamonds', 'clubs'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deck = new Array();


function beginGame(){
    gameStarted = true;
      gameOver = false;
      playerWon = false;
      deck = createDeck();
      randomCard(deck);
      //dealerHand = [randomCard(), randomCard()];
      //playerHand = [randomCard(), randomCard()];
      showStatus();
    }
    beginGame()





function createDeck()
   {
       deck = new Array();
       for (var i = 0 ; i < suits.length; i++)
       {
           for(var x = 0; x < values.length; x++)
            {
               var card ={Value: values[x], Suit: suits[i]}
               deck.push(card);
       }
    }
   return deck;
}
console.log(createDeck())

function getCardValue (card) {
    switch(card.value) {
        case 'ace':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        default: //king, queen, jack//
            return 10;

        }

    }
    console.log(getCardValue('ace'))

 function showStatus()
 {
   if(!gameStarted)
   {
     textArea.body = 'Welcome to Blackjack!';
     return; 
   }
   let dealerCardString = ' ';
   for(let i=0; i<dealerHand.length; i++)
   {
     dealerCardString += getCardString(dealerHand[i]) + '\n';
   }
   let playerCardString='';
   for(let i=0; i<playerHand.length; i++)
   {
     playerCardString += getCardString(playerHand[i]) + '\n';
   }
}

showStatus()
   
 function getScore(cardArray){
    let score = 0;
    let hasAce = false;
    for(let i=0; i<cardArray.length; i++){
      let card = cardArray[i];
      score += getCardValue(card);
      if(card.value == 'ace'){
        hasAce = true;
      }
      
      if(hasAce && score+10<=21){
        return score+11;
      }
    }
     return score; 
  }

  console.log(dealerScore)
  console.log(getScore(playerHand))

  function updateScores(){
    dealerScore = getScore(dealerHand);
    playerScore = getScore(playerHand); 
  }
   updateScores();

     function getNextCard() {
         return deck.shift();
      }
 
      function checkForEndOfGame(){
        updateScores();
         if(gameOver){
          while(dealerScore<playerScore &&
                playerScore <=21 &&
                dealerScore <=21){
                  dealerCards.push(getNextCard());
                  updateScores();
          }
        }
         
          if(playerScore>21){
            playerWon=false;
            gameOver = true;
          }
         
          else if(dealerScore>21){
            playerWon = true;
            gameOver = true;
          }
         
          else if(gameOver){
            if(playerScore>dealerScore){
              playerWon = true;
            }
            else{
              playerWon = false;
            }
          }
       }
       
checkForEndOfGame()
       function getCardString(card) {
        return card.value + "_of_ " + card.suit;
       }
       
//getCardString()




function randomCard(){
    return  Math.floor(Math.random()* deck.length); 
   } 
randomCard()
function dealCard(i, hand){
  
    if (deck ==0) return false;
    var img = document.createElement("img");
    
    img.src = ("images/" + deck[i].Value + '_of_'+ deck[i].Suit + ".png");


    //img.setAttribute("src", "images/", ".png") ;
    //console.log("images/" + deck[i].Value + '_of_'+deck[i].Suit + ".png");
    //document.body.appendChild(img);

    document.getElementById(hand).appendChild(img)

    removeCard(i) //DEBUG

}

    
function removeCard(c){
    deck.splice(c, 1)
    }
    
    function dealButton(){
        var card, value;
        dealCard(randomCard(), 'player-hand');
        dealCard(randomCard(), 'dealer-hand');
        dealCard(randomCard(), 'player-hand');
        dealCard(randomCard(), 'dealer-hand');
         
        console.log('playerHand', playerHand);
        console.log('dealerHand', dealerHand);
         
        }
  
    document.getElementById('deal-button').addEventListener('click', dealButton); //Moved from dealButton
  //dealButton()  

  function hit(){
//  var hit = () => {
    dealCard(randomCard(), 'player-hand');
     console.log("I ran!")


 // }
}
  
 function hitButton(){
     document.getElementById('hit-button').addEventListener('click', hit);
    }

 hitButton()

var stand = () =>{
    dealCard(randomCard(), 'dealer-hand');
}
function standButton(){
    document.getElementById('stand-button').addEventListener('click', stand);

}
standButton()
