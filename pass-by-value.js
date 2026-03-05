function multiply (a, b){
    a = a - 5;
    b = b - 10;
    console.log(a, b);
    return a*b;
}

let x = 10, y = 20;
console.log("before calling: ",x, y);
const result = multiply(x, y);
console.log(result);
console.log("after calling: ",x, y);

// premitive type e value pass kore tai original value change hoyna jodi pass korar por kothao change kora hoy o