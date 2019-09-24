// //positive Numbers
// var nums = [3, -4, 7, -1, 4, -3];

// function positiveNumber(num){
// return num>0;

// var result = nums.filter(positiveNumber);
// console.log(result)
// }
//even numbers
//}
//var nums = [3, -4, 7, -1, 4, -3, 8];

// var nums = [3, -4, 7, -1, 4, -3, 8];

// function isNumber(num){
// return num%2==0;}
// var result = nums.filter(isNumber);

// console.log(result)

// //Square the Numbers

// var arr = [1, 2, 3];

// var newArr= arr.map(function(element){
//   return element * element
// });
// console.log(newArr);
  
// console.log('hello');

//cities temperature
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];
//     var newCities = cities.filter(city=>city.temperature<70);
//     console.log(newCities);

// cities Name
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];
//     var newCities = cities.map(city=>city.name);
//     console.log(newCities);

// Good Job!
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 
// 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 
// 'Jason', 'Che', 'Ben' ];

// people.forEach(function(element){ 
//     console.log("Good Job, "+  element + "!")
// });

//Sort an array


// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 
// 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 
// 'Jason', 'Che', 'Ben' ];

// // people.sort();
// console.log(people);

//sort an array 2
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 
// 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 
// 'Jason', 'Che', 'Ben' ];
// people.sort(function(a, b)
// {return a.length- b.length});
// console.log(people);

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];
    
//     // function sum (arr){
    //     return arr.reduce((a,b)=>a +b);
    //   }
    //   function sortArr(arr) {
    //       return arr.sort((a,b) =>sum(a) - sum(b));
        
    //   }
    
    //   console.log(sortArr(arr));

//Call3Times
    // function fun(){
    //     console.log ("hello world")
    //   }
    //   function call3Times(fun){
    //     fun();
    //     fun();
    //     fun();
    //   }
    //   call3Times(fun);

    // function fun(){
    //     console.log ("hello world");
    //   }
      
//callNTimes


    //   function callNTimes(number, fun){
    //     for( var i = 0; i<number; i++){
    //       fun();
    //     }
    //   }
    //   callNTimes(7, fun);


    // var num = [7, 11, 12, 13];
    // var arrSum = num.reduce(function(total, amount){
    //   return total + amount
    // });
    // console.log(arrSum);




// function acronym(arr){
//   return arr.reduce((firstLetter, word ) => (firstLetter + word[0], ''));
  
// }
// acronym(['very', 'important','person']);


// var arr = [
//     { name: 'Bob' },
//     { name:'Alice' },
//     { name:'Joe' } ];
//     arr.forEach(function(person) {
//        console.log('Hello, ' + person.name + '!');
//     });

