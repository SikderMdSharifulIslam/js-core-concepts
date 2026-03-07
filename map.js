const numbers = [1,2,3,4,5];

// const doubled = [];

// normal loop
// for(const num of numbers){
//     doubled.push(num*2);
// }


// using arrow function and map
const doubleIt = num => num*2; 
//doubleIt k call korle shey akta single parameter nibe 
// and double kore return korbe

//const doubled = numbers.map(doubleIt); //map array return kore

// more shortcut
const doubled = numbers.map(num => num*2);
const squared = numbers.map(num => num*num);

// console.log(doubled);
// console.log(squared);

// get the firstLetters using map
const friends = ['zaved', 'naved', 'khaled', 'sajed'];
const firstLetters = friends.map(friend => friend[0]); //map returns an array

// console.log(firstLetters);

// map on object property
const products = [
    {name: 'laptop', price: 45000},
    {name: 'phone', price: 15000},
    {name: 'tablet', price: 25000},
]
// single line arrow function e automatic return hoy
const prices = products.map(pd => pd.price)
// console.log(prices);

// multi line arrow function e automatic return hoy na, manually return korte hoy
const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toLocaleUpperCase();

    // console.log(index, upperCaseName, productsArray);
    //index hosse products array er index dibe
    //productsArray full array ta k map er body er moddhe ene dibe, sometimes lagte pare

    return upperCaseName;
});

// console.log(names);

// forEach loop kono kisu return korena, map kore. so return na lagle forEach use kora jaby
products.forEach(pd => console.log(pd.name));

// output:
// laptop
// phone
// tablet