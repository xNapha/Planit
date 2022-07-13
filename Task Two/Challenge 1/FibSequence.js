function fibSeq(n){
    let n1 = 0, n2 = 1, fib;
    if (n == 0){
        return n1;
    }
    for(let i = 2; i <= n; i++){
        fib = n1 + n2;
        n1 = n2;
        n2 = fib;
    } return fib;
}

function findIndexN(F){
    let n1=0, n2=1, fib = 0, n = 0;
    while(fib < F){
        fib = n1 + n2;
        n1 = n2;
        n2 = fib;
        n++;
    } return n;
        
}

console.log(fibSeq(10));
console.log(fibSeq(17))
console.log(fibSeq(18))
console.log(findIndexN(2000))

