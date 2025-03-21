const fibTab = (() => {
    return function (n) {
        if (n <= 1) return n;

        let dp = [0, 1]; 
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2]; 
        }

        return dp[n];
    };
})();

console.log(fibTab(10)); 
console.log(fibTab(50)); 
