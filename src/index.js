function fact(n){
    if(n > 0){
        return n * fact(n-1);
    }else if(n < 0){
        console.log('Enter a positive number');
    }else{
        return 1;
    }  
}
console.log(fact(1));