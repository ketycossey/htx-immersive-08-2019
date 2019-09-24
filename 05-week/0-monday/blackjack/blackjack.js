// // // Creates card
// // var cardImage= document.createElement("img")
// // cardImage.setAttribute("src", "images/10_of_clubs.png") // replace card with function

// // Adds card to player hand

// var cardsInDeck = new Array();
// var numberOfCardsInDeck = 52;
// function deal(value, person){

// if (numberOfCardsInDeck ==0) return false;
// var img = document.createElement("img");
// img.src ="images/" + cardsInDeck[value] + ".png";
// img.setAttribute("src", "images/", ".png") ;
// // document.getElementById(person + "-hand").appendChild(img);

// // document.body.appendChild(img);
// removeCard(value)


// document.getElementById("player-hand").appendChild(img)
// document.getElementById("dealer-hand").appendChild(img)


// }   
   
//     // createCard('9_of_hearts', 'dealer')
//     // createCard('9_of_hearts', 'dealer')
//     // createCard('9_of_hearts', 'player')
//     // createCard('9_of_hearts', 'player')
// // };

//    document.getElementById('deal-button').addEventListener('click', deal(randomCard()));

//    function randomCard(){
//     return Math.floor(Math.random()*numberOfCardsInDeck);
// }

// function removeCard(c){
// for (j = c; j<=numberOfCardsInDeck-2; j++){
//     cardsInDeck[j] = cardsInDeck[j+1]
// }
//     numberOfCardsInDeck --;
// }
// // document.getElementById(“hit-button”).addEventListener(“click”, deal(randomCard));

// // document.getElementById(stand-button”).addEventListener(“click”, deal);

function createCard(value, person) {
    let img = document.createElement('img');
    img.src= 'images/' + value + '.png';
    img.setAttribute('class', 'img');
    document.getElementById(person + '-hand').appendChild(img);
 }
 
 var deal = () => {
    createCard('9_of_hearts', 'dealer')
    createCard('9_of_hearts', 'dealer')
    createCard('9_of_hearts', 'player')
    createCard('9_of_hearts', 'player')
 }
 document.getElementById('deal-button').addEventListener('click', deal);
