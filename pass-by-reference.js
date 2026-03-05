function firstSum(arr1, arr2){

    arr1[0] = 100;
    arr2[0] = 200;

    const first = arr1[0];
    const second = arr2[0];
    return first + second;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log('before: ', num1, num2); //[1,2,3] [4, 5, 6]
const result = firstSum(num1, num2);
console.log('after: ', num1, num2); //[100,2,3] [200,5,6]


// array, function, object egulo kothao pathale reference shoho chole jay, erpor onno jayga theke change korle main jayga teo change hoye jay