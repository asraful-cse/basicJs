//  14:5.. calculate factorial of a number using for loop.
// mone rakhte hobe je  * korar somoi i=1 theke suro korte hobe and + korar somoi 0 theke soru korte hobe .


// forloop factorial  :::::::::::

var factorial = 1;
 for (var i = 1; i <= 10; i++) {
     var factorial = factorial * i;
     console.log(i,factorial);
     
 }

//output::
// 4 24
// 5 120
// 6 720
// 7 5040
// 8 40320
// 9 362880
// 10 3628800

//function forloop use to  factorial:::
function  factorial(n){
    var fact = 1;
    for (var i = 1; i <=n; i++) {
         fact = fact * i;
        
     }
    
         return fact;
}
       var result = factorial(4);   // output: 24
    console.log(result);

    //function while.loop use to  factorial:::