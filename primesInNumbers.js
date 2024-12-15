/*Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"*/





/*JS*/




function primeFactors(n){
    //your code here
   let factors = [];
    
    // Check for number of 2s that divide n
    let count = 0;
    while (n % 2 === 0) {
        count++;
        n /= 2;
    }
    if (count > 0) {
        factors.push(count > 1 ? `(2**${count})` : `(2)`);
    }

    // Check for odd factors from 3 onwards
    let p = 3;
    while (p * p <= n) {
        count = 0;
        while (n % p === 0) {
            count++;
            n /= p;
        }
        if (count > 0) {
            factors.push(count > 1 ? `(${p}**${count})` : `(${p})`);
        }
        p += 2;
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push(`(${n})`);
    }

    // Join all factors and return as a string
    return factors.join('');
}
