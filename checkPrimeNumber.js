// 14:11 ...check weather a number is prime number.
// prme number hosse moulik songkha jemon 7,13,19... ja 1 othoba nij songkha diye vag hobe but onno kono songkha diye vag jabe na.
// jeheto  kono kicodiye vag hoina seheto i= 2 hobe 2diye start korte hobe.

// normal prime number code::
// var n = 128;
// for (var  i = 2; i < n; i++) {
//     //console.log(i, n % i);
//    if (n % i == 0){
//     console.log('Not a prime number')
//     break;
//    }
    
// }
//  console.log('this number is a prime number');




//function using to prime Number coding.........

 function isPrime(n){
    for (var  i = 2; i < n; i++) {
       if (n % i == 0){
             return 'Not a prime number';

       }
        
    }
    return 'this number is a prime number';
 }
 var result = isPrime(1455);
console.log(result);

// output ::: Not a prime number