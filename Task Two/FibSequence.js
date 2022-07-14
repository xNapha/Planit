function fibSeq(n){
    if (n < 2){
        return n;
    }
    return fibSeq(n-1) + fibSeq(n-2);
    ;
}


console.log(fibSeq(2));


