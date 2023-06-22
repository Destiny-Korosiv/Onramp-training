console.log("Hello Onramp")

const y=5
const x = "Boris Johnson"
const w = false
// const x=5
let f;
let s=null

console.log ("type of y", typeof y)
console.log("type of f", typeof f)
console.log("type of x", typeof x)
console.log("type of w", typeof w)
console.log("type of s", typeof s)


document.querySelector('#dob').value="2023-02-20";
// document.getElementById("dob"). value = "2023-02-20"

// Array
let myArr= ["Joe", "John", "Mary", 2, 4]
console.log(myArr[0])
console.log(myArr.length)
console.log(myArr[2])

// Unshift array method
console.log(myArr)

// myArr.unshift('Joy)
//console.log(myArr)

console.log([...myArr, 'joy'])

const cities= ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"]
console.log("before slicing", cities)
const newCities= cities.slice(2)
console.log("after slicing", newCities)

const startEndOption= cities.slice(2, 4)
console.log("start and end options", startEndOption)


// splice() array method
const months= ['Jan', 'March', 'April', 'June']
console.log("original array", months)
months.splice(1, 0, "Feb")
console.log("splice with three param", months)
months.splice(4, 0, "May")
console.log("adding may", months)
months.splice(7, 0, "July")
console.log("adding July", months)
months.splice(8, 0, "AUG")
console.log("adding AUG", months)
months.splice(9, 0, "SEP")
console.log("adding SEP", months)
months.splice(10,0, "OCT")
console.log("adding OCT", months)
months.splice(11, 0, "NOV")
console.log("adding NOV", months)
months.splice(12, 0, "DEC")
console.log("adding DEC", months)

// looping through an array
const numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 3 === 0) {
        console.log(numbers[i])
    }
}

const myString= "osakpolor"
console.log(myString.toUpperCase())

function addition(){
    let addNum = a+b
    return newNum
}
