//14:4.. chack weather a year is  leap year or not:::


// const year = 3688;
// console.log(3688 / 4);
// console.log(3688 % 4);    // this is leap year..output:: 922   > 0//

// when amra jokhon single =  dibo tokhon value er man set korbe...
// when amra jokhon double == dibo tokhon value er man chack korbe/compear kore...
// ==   true of false result....

//leap year check and not leap year code //:: it's not perfect...coding

// const year = 398;
// let remainder = year % 4;

// if (remainder == 0){
//     console.log('This year is leap year'); 
// }
// else{
//     console.log('This year us not leap year')

// }

//leap year check and not leap year check with function use to code //::barbar vinno valo diye korar jonno..
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));  //true
// console.log(leapyear(2000));  //true
// console.log(leapyear(1700));   //false
// console.log(leapyear(1800));   //false
// console.log(leapyear(100));   //false



//leap year check and not leap year check with function use to code //::barbar vinno valo diye korar jonno..
function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
console.log(isLeapYear(2016));  //true
console.log(isLeapYear(2000));  //true
console.log(isLeapYear(1700));   //false
console.log(isLeapYear(1800));   //false
console.log(isLeapYear(100));   //false

//google link ... ditails now...
// https://dev.to/nas5w/creating-a-javascript-function-to-calculate-whether-it-s-a-leap-year-2cip

/* Calculating whether it's a leap year isn't a straightforward as you might think! Here's how leap years are calculated, as described on Wikipedia:

    In the Gregorian calendar, each leap year has 366 days instead of 365, by extending February to 29 days rather than the common 28. These extra days occur in each year which is an integer multiple of 4 (except for years evenly divisible by 100, which are not leap years unless evenly divisible by 400).

Wat? 🤯

Let's break this down into enumerable steps, which we can then convert into code:

Note: This is an academic exercise! If you're going to do any date calculations in a production application, I'd strongly encourage you to use a tried-and-true library like moment.js. Dates can be tricky and you don't want to hit nasty bugs rolling your own solution!

1) If a year is divisible by 400, it's a leap year
2) Otherwise, if a year is divisible by 100, it's not a leap year
3) Otherwise, if a year is divisible by 4, it's a leap year  */