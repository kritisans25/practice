exports.prime = function(x) {
    var isPrime = true;
    if (x == 1) {
        return "Neither prime nor composite.";
    } else if (x > 1) {
        for (let i = 2; i < x/2; i++) {
            if (x % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime ? "Prime" : "Not prime";
    } else {
        return "Not prime";
    }
};
