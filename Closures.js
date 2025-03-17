function bankAccount() {
    let balance = 0;
    return {
        deposit : (amount) => {
            balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${balance}`);
        },
        withdraw : (amount) => {
            if(amount > balance){
                console.log(`Insufficient funds. Current balance: $${balance}`);
                return;
            }
            balance -= amount;
            console.log(`Withdrawn: $${amount}. New balance: $${balance}`);
        },
        getBalance : () => {
            console.log(`Current balance: $${balance}`); 
            }
    }
}

// const account = bankAccount();
// account.deposit(100);
// account.deposit(1000);
// account.withdraw(200);
// account.getBalance();
// account.withdraw(1000);


// function clickTracker(limit) {
//     let count = 0;

//     function clickHandler() {
//         count++;
//         console.log(`Button clicked ${count} times`);

//         if (count >= limit) {
//             console.log("Click limit reached! Removing event listener.");
//             button.removeEventListener("click", clickHandler); 
//         }
//     }

//     return clickHandler;
// }


// const button = document.getElementById("btn");
// const clickListener = clickTracker(3);
// button.addEventListener("click", clickListener);






const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=mangaluru&appid=7e73d83c06109904754bc150e0022aa4&units=metric`;

function weatherApi() {
    let cache ={};
   
    return async function(url){
        if(cache[url]){
            return cache[url];
        }
        const res = await fetch(url);
        const data = await res.json();
        cache[url] = data;
        return data;
    }

}


const getWeather = weatherApi()

getWeather(apiUrl).then(data => {
    console.log(data.name);
    console.log(data.main.temp + "°C");
})

getWeather(apiUrl).then(data => {
    console.log(data.name);
    console.log(data.main.temp + "°C");
})