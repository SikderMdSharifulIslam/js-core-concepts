function add(num1, num2){
    console.log('arguments: ', arguments); 
    //arguments:  [Arguments] { '0': 2, '1': 5, '2': 8, '3': 45, '4': 46 }
    console.log('arguments: ', arguments, arguments[2]); 
    //arguments:  [Arguments] { '0': 2, '1': 5, '2': 8, '3': 45, '4': 46 } 8

    // convert array-like-object arguments into array
    const agrs = [...arguments];
    console.log('args:', agrs); //args: [ 2, 5, 8, 45, 46 ]
    return num1+num2;
}

add(2, 5, 8, 45, 46);