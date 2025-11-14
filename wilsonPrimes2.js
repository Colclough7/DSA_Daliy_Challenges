/*Wilson primes satisfy the following condition. Let 
P
P represent a prime number.

Then,

(
P
−
1
)
!
+
1
P
∗
P
P∗P
(P−1)!+1
​
 
should give a whole number, where 
P
!
P! is the factorial of 
P
P.

Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.*/




/*JS*/




function amIWilson(p) {
    if (p < 2) return false;

    // Check primality quickly
    for (let i = 2; i * i <= p; i++) {
        if (p % i === 0) return false;
    }

    const mod = p * p;
    let fact = 1;

    // Compute (p-1)! mod p²
    for (let n = 2; n < p; n++) {
        fact = (fact * n) % mod;
    }

    return (fact + 1) % mod === 0;
}

