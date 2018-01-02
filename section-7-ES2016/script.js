// Lecture : Template literals

// let firstName = `Victor`;
// let lastName = `Jordan`;
// const yearOfBirth = 1995;

// function calcAge(year) {
//     return 2018 - yearOfBirth;
// }

// console.log(`${firstName} ${lastName}, ${calcAge(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('V'));
// console.log(n.endsWith('k'));


// Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

var ages6 = years.map(el => 2016 - el);
console.log(ages6);
*/

//Lecture : Arrays


/*
//const boxes = document.querySelectorAll('.box');
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/

/*
//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
};

//ES5
var ages = [22, 11, 14, 44, 3, 21];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

//ES6
//Using findIndex return the same as above
console.log(ages.findIndex(cur => cur >= 18));
*/

//---------------------------------------------------//

// Lecture : Spread operator

function addFourAges(a,b,c,d) {
    return a + b + c + d;
}
  
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 21, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');