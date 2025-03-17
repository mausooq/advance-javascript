// // Simulating an API call
// const fetchData = async () => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Data Fetched "), 1000);
//     });
// };


// const getData = async () => {
//     console.log("Fetching data...");
//     const data = await fetchData();
//     console.log(data);
// };

// getData();



// const fetchUser = async () => {
//     try {
//         const response = await fetch("https://api.github.com/users/mausooq");
//         if (!response.ok) {
//             throw new Error("Network Error ❌");
//         }
//         const user = await response.json();
//         console.log("User:", user);
//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// };

// fetchUser();


const fetchPosts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2"]), 2000);
    });
};

const fetchComments = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1000);
    });
};

// Fetching both in parallel
const fetchAllData = async () => {
    console.log("Fetching posts and comments...");

    const [posts, comments] = await Promise.all([fetchPosts(), fetchComments()]);

    console.log("Posts:", posts);
    console.log("Comments:", comments);
};

fetchAllData();


