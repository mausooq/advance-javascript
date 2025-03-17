const small = (str) => str.toLowerCase();
const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1);
const removeSpace = (str) => str.trim();

const pipe = (...func) => value => func.reduce((acc,fn) => fn(acc),value)

const formateString = pipe(small,removeSpace,capitalize);
console.log(formateString('  hello woRld from Mausooq '));

console.log('------------------------------------------');


const product = [
    {name: "phone", price: 1000, category: "electronics"},
    {name: "laptop", price: 5000, category: "electronics"},
    {name: "shirt", price: 500, category: "clothes"},
    {name: "shoe", price: 1000, category: "clothes"},
]

const filterProduct = (category) => (product) => product.filter(p => p.category === category);


const applydiscount = (discount) => (product) => product.map(p => (
    {
        ...p,
        price: p.price - (p.price * discount / 100)
    }
));

const sortByPrice = (product) => product.sort((a,b) => a.price - b.price);

const pipe2 = (...func) => value => func.reduce((acc,fn) => fn(acc),value)

const processProduct = pipe2(filterProduct('electronics'),applydiscount(10),sortByPrice);

console.log(processProduct(product));