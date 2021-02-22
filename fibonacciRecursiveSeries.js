// 14:10-- create fibonacci series in a recursive way....

// https://en.wikipedia.org/wiki/Fibonacci_number

// F0 	F1 	F2 	F3 	F4 	F5 	F6 	F7 	F8 	F9 	F10 	F11 	F12 	F13 	F14 	F15 	F16 	F17 	F18 	F19 	F20
// 0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	89 	144 	233 	377 	610 	987 	1597 	2584 	4181 	6765    10946
// Iterative way to fabonacci:::
//ager 2tar value jog kore fabonacci korte hoi::::


//// fibnacci formola:::noted...
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
// fibo[7] = fibo[7-1] + fibo[7-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];


//[0 	1 	1 	2 	3 	5 	8 	13 	21 ]

function fibonacci(n){

    if (n == 0){
        return [0];
    }
        else if (n == 1){
            return [0, 1];
        }
            else {
                //calculate  array nth element..
                var fibo = fibonacci(n - 1);
                var nextElement = fibo[n-1] + fibo[n-2];
                fibo.push(nextElement);
                    return fibo;
            }
}
            var result = fibonacci(10);
                console.log(result);
                

                // output:::
                // [
                //     0, 1,  1,  2,  3,
                //     5, 8, 13, 21, 34,
                //    55
                //  ]
                 