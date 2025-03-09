// myfirst.js
export function prime(x) {
    if (x <= 1) {
        return false;  // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(x); i++) {  // Only check up to sqrt(x)
        if (x % i === 0) {
            return false;  // Found a divisor, so it's not prime
        }
    }

    return true;  // No divisors found, so it's prime
}

