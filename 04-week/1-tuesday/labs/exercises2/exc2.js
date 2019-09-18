// Madlib


function madlib(name, subject){
    return name +'s favorite subject in school is ' + subject
}

// tipCalculator1 
function tipAmount(amount, service){
    var tip
    if (service.toLowerCase()=='good'){
    tip = amount*.2}
    else if (service.toLowerCase() == 'fair'){
    tip = amount *.15}
    else if (service.toLowerCase()=='bad'){
    tip = amount * .10;}
    else {return 'You do not get a tip'
    }
    return tip;
    }
    
    tipAmount(40, 'fair')


//totalAmount

function totalAmount(amount, service){
    var totalBill
    if (service.toLowerCase()=='good'){
    totalBill = amount*.2 + amount}
    else if (service.toLowerCase() == 'fair'){
    totalBill = amount *.15 + amount}
    else if (service.toLowerCase()=='bad'){
    totalBill = amount * .10 + amount}
    else {return 'You do not get a tip'
    }
    return totalBill;
    }
    
    totalAmount(100, 'good')

    //printNumbers1 FOR

function printNumbers(){
  var n;
  for (n=1; n<11; n++) {
  console.log(n)  }
}

printNumbers()

function countToTen(){
    var n = 1
    while(n<11){
      console.log(n);
      n++;
    }
  }
  countToTen()

  function printSquare(rows, cols){
    var numOfCol= 5;
    var numOfRow = 5;
      for (var i =0; i<=numOfRow; i++)
      {
        for ( var j = 0; j<=numOfCol; j++)
         { console.log (" * ");
      }
       document.write('<br>');
      }
  }
    
    printSquare()



   // leetspeak
var word = {A:'4', E:'3', G:'6', L: '1', O:'0', S: '5', T: '7' };

function leetspeak(str){
var arr = str.toUpperCase().split('');
for (var i in arr){
arr[i] = word[arr[i]];
}
return arr.join('');
}
leetspeak('leet')



