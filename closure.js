function outerFunction() {
    function innerFunction() {
        console.log('This is the inner function');
    }
    return innerFunction;
}

const result = outerFunction();
// result();

function counter(owner) {
    let count = 0;
    function increment() {
        count++;
        console.log('value of count: ', owner, count);
    }
    return increment;
}

const rahimCount1 = counter('rahim');
// rahimCount1();
// rahimCount1();
// rahimCount1();


const karimCount1 = counter('karim');
// karimCount1();

// rahimCount1();
// rahimCount1();

// const count1 = counter();
// count1();
// count1();

function greet(name) {
    
    function hello() {
        console.log("Hello " + name);
    };
    return hello;
}

const sayHello = greet("Shariful");
const sayGello = greet("ABC");
sayHello(); // Hello Shariful
sayGello(); // Hello ABC
sayHello(); // Hello Shariful
