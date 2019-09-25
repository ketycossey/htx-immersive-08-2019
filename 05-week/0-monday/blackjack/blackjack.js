
var dealerHand= [];
var playerHand=[];
var suits = ['spades', 'hearts', 'diamonds', 'clubs'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deck = new Array();

 
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

createDeck()

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

  var hit = () => {
    dealCard(randomCard(), 'player-hand');
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

  function newDeck() {
    var cards = [];
    for (var i = 1; i <= 13; i++) {
      cards.push({ value: i, suit: 'spades' }); // change to Card constructor
      cards.push({ value: i, suit: 'hearts' });
      cards.push({ value: i, suit: 'clubs' });
      cards.push({ value: i, suit: 'diamonds' });
    }
    return cards;
  }

newDeck()

