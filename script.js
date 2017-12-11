// var name = 'Victor';
// console.log(name);

// var lastName = 'Jordan';
// console.log(lastName);

//Lecture : opreators 

var player1 = {
    height : 170,
    age : 20,
};


var player2 = {
    height : 177,
    age : 18,
};

var scoreP1 = player1.height * player1.age;
var scoreP2 = player2.height * player2.age;

console.log(`Player1, ${player1.age} years old and ${player1.height}`);
console.log(`Player1, ${player2.age} years old and ${player2.height}`);

if (scoreP1 > scoreP2) {
    console.log(`Player1, win with the score ${scoreP1}`);

} else if ( scoreP1 === scoreP2 ){
    console.log ('DRAW!');

} else {
    console.log(`Player2, win with the score ${scoreP2}`);
}

