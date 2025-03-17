function BankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
            } else {
                balance -= amount;
                console.log(`Withdrew: $${amount}. Remaining balance: $${balance}`);
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const myAccount = BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
// console.log(myAccount.balance); 
