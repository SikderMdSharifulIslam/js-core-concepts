const students = [
    {name: 'Tormuj', age:  22},
    {name: 'Zaved', age:  31},
    {name: 'Naved', age:  23},
    {name: 'Khaled', age:  20},
    {name: 'Sajed', age:  34},
    {name: 'Nahid', age:  22},
    {name: 'Nasib', age:  41},
]

const student = students.find(std => std.name[0] === 'N'); 
//find first matched item k return kore and baki gulo k ignore kore.
//find e kono kisu match na korle undefined or null return kore

//filter all matched item k return kore.
//filter e kono kisu match na korle empty array return kore
console.log(student);