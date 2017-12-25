//Function constructor
// var Person = function(name, yearOfBirth, job) {

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }

// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth);
// }

// var john = new Person('John', 1990, 'teacher');
// john.calculateAge();

//FUNCTIONS

/*var years = [1990, 1965, 1995, 1937, 2005];

function arrayCalc(arr, fn) {

    var arrRes = [];

    arr.forEach(element => {
        arrRes.push(fn(element));
    });

    return arrRes;
};

function calculateAge(el) {
    return 2017 - el;
};

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {

    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

//--------------------------------------------//

//Lecture : Functions returning functions

function interviewQuestion(job) {
    if(job === 'designer'){
        return function(name){
            console.log(`${name}, can you please explain what UX design is?`);
        }
    } else if(job === 'teacher') {
        return function(name){
            console.log(`What subject do you teach, ${name}?`)
        }
    } else {
        return function(name){
            console.log(`Hello ${name}, what do you do?`);
        }
    }    
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');


