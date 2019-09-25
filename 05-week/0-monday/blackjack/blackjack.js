
var dealerHand= [];
var playerHand=[];
var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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
console.log(createDeck())
console.log(deck)

 
function randomCard(){
    return  deck[ Math.floor(Math.random()* deck.length)]; 
   }
   
randomCard()
// console.log (randomCard())



 
function dealCard(i){
 
    if (deck ==0) return false;
    var img = document.createElement("img");
    
    img.src = ("images/" + deck[i].Value + '_of_'+ deck[i].Suit + ".png");
    //img.setAttribute("src", "images/", ".png") ;
    //console.log("images/" + deck[i].Value + '_of_'+deck[i].Suit + ".png");
    document.body.appendChild(img);

    document.getElementById('player-hand').appendChild(img)

    removeCard(i)

}
dealCard(0) //DEBUG
//console.log(dealCard(5))
 

    
function removeCard(c){
    for (j = c; j<=deck-2; j++){
       deck[j] = deck[j+1]
    }
    deck--
    }
    
 
    function dealButton(){
        var card, value;
        document.getElementById('deal-button').addEventListener('click', dealCard);
        // dealCard(playerHand, '#player-hand');
        // dealCard(dealerHand, '#dealer-hand');
        // dealCard(playerHand, '#player-hand');
        // dealCard(dealerHand, '#dealer-hand');
         
        console.log('playerHand', playerHand);
        console.log('dealerHand', dealerHand);
         
        }
         
  dealButton()      

