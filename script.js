//CHALLENGE ONE
// var player1 = {
//     height : 170,
//     age : 20,
// };

// var player2 = {
//     height : 177,
//     age : 18,
// };

// var player3 = {
//     height : 155,
//     age : 49
// };

// var scoreP1 = player1.height + 5 * player1.age;
// var scoreP2 = player2.height + 5 * player2.age;
// var scoreP3 = player3.height + 5 * player3.age;

// console.log(`Player1, ${player1.age} years old and ${player1.height}`);
// console.log(`Player1, ${player2.age} years old and ${player2.height}`);

// if (scoreP1 > scoreP2 && scoreP1 > scoreP3) {
//     console.log(`Player1, win with the score ${scoreP1}`);
// } else if ( scoreP1 === scoreP2 === scoreP3){
//     console.log ('DRAW!');
// } else if (scoreP2 > scoreP3 && scoreP2 > scoreP1){
//     console.log(`Player2, win with the score ${scoreP2}`);
// } else {
//     console.log(`Player3, win with the score ${scoreP3}`);
// }

//Array lecture

// var names = ['Victor', 'John', 'Mary'];
// var years = new Array (1990, 1999, 2002);

// console.log(names);

// var john = ['John', 'Smith', 1990, 'designer', 'false']

// john.push('Blue');
// john.unshift('Mr');

// console.log(john);

// //IndexOf returns -1 if the array not contains 'teacher', and 1 if contains
// if (john.indexOf('teacher') === -1) {
//     console.log('John is not a teacher');
// }

// var john = {
//     name : 'John',
//     lastName : 'Smith',
//     yearOfBirth : 1990,
//     job : 'teacher',
//     isMarried : false,
//     family : ['Jane', 'Mark', 'Bob'],
//     calculateAge : function(){
//         this.age = 2016 - this.yearOfBirth;
//     }
// }

// john.calculateAge();
// console.log(john);

function printFullAge(params) {
  
    var array2 = new Array;
    var fullAges = new Array;

    const currentlyYear = 2017;
    
    params.forEach(element => {
        array2.push(2017 - element);
    });
    
    params.forEach(element => {
        if(currentlyYear - element >= 18){
            console.log(element);
            fullAges.push(true);
        } else {
            fullAges.push(false);
        }
    });

    return fullAges;

};

var years = [1995, 1989, 2010, 2015, 2000, 1998];

var full_1 = printFullAge(years);
var full_2 = printFullAge([1999, 1987]);

console.log(full_1);
console.log(full_2);