// function processUserInput(name, callback) {
//     console.log("Processing user...");
//     callback(name);
// }

// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// processUserInput("Alice", greetUser);




function downloadFile(url, callback) {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
        callback(`Download complete: ${url}`);
    }, 2000);
}

downloadFile("https://example.com/file.zip", (message) => {
    console.log(message);
});

