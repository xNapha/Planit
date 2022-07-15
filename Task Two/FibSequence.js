let gr = (1+Math.sqrt(5))/2
let arr = [];
function fibSeq(n){
    if(n <2){
        return n;
    }
    return fibSeq(n-1) + fibSeq(n-2);
};

function revFib(n){
    arr.unshift(n)
    if (n <= 1){
        arr.unshift(n)
        return 0;
    }
    n = Math.round(n/gr)
    revFib(n)
    return arr
};

function findFib(n){
    if (n == 0 || n == 1){
        return n + " is a Fibonacci number"
    } else if(n < 0){
        return "Please enter a positive integer"
    }
    let x = revFib(n).length;
    let y = fibSeq(x)
    if(revFib(n)[x-1] == y){
        return n + " is a Fibonacci number"
    } else if (fibSeq(x+1) - n < n - fibSeq(x)){
        return (x + 1) + " is the closest index in the fibonacci sequence"
    }
    return x + " is the closest index in the fibonacci sequence"
};


console.log(findFib(10))
console.log(fibSeq(6))
console.log(fibSeq(7))



