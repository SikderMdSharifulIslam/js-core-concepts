// document.getElementById('#btn').addEventListener('click', function(event){
//     console.log();
// });

// callback function: akta function er moddhe arekta function k call deya
// A callback function is a function passed into another function as an argument and executed inside it.

// purpose: main function (j function e argument hishebe pathailam) e change na kore, argument change kore kore akta function theke different different kaj execution kora jay.

function settleLife(isBCS, callback1, callback2, patri, patro){
    if(isBCS){
        callback1(patri);
    }else{
        callback2(patro);
    }
}

function marriage(patri){
    console.log("biniyani khabo ami", patri);
}
function tarriage(patri){
    console.log("noddles khabo ami", patri);
}

function hello(name){
    console.log('hello', name);
}

function rejected(patro){
    console.log(patro, 'vat khete chay');
}

settleLife(true, marriage, rejected, 'naika', 'noga');
settleLife(true, tarriage, rejected, 'naika', 'noga');
settleLife(true, hello, rejected, 'naika', 'noga');
