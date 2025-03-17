const fibMemo = (() => {
    const cache = {}; // Private cache (closure)

    return function fib(n) {
        if (n in cache) return cache[n]; // Return cached result
        if (n <= 1) return n;

        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
})();

console.log(fibMemo(10)); // 55
console.log(fibMemo(50)); // 12586269025 (Much faster due to caching)
