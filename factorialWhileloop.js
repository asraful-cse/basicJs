// // normal while loop::
// var i = 1;
// while (i<=10){
//     console.log(i);
//     i++;
// }

// //  output::
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// factorial and while loop using to code::::::
// var i = 1;
//  var factorial = 1;
// while (i<=11){
//     fact = factorial * i;
//     console.log(fact);      // while er bahire dile console log diye korle 
//     i++;                          //  output:: diye diey korte hobe...

// }
//  output::
// 1
// 2
// 6
// 24
// 120
// 720
// 5040
// 40320
// 362880
// 3628800


// factorial function + while loop using to coding:::

function factorial(n){
var i = 1;
 var fact = 1;
while (i<=n){
    fact = fact * i;   
    i++;                        
    }
    return fact;      // factorial er name eksathe change korar jonno fn+f2 diye eksathe rename kora jai.
}

var result = factorial(5); // output:: 120
console.log(result);