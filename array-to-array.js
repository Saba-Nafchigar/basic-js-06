// debugger
let firstArray = ["saba","nafchigar"]
let secondArray = ["ali" , "biglari"]
let thirdArray = ["reeraa" , "bigchi"]

let result = [100,200]
// result=firstArray.concat(secondArray,thirdArray)
// console.log(result); // ignore 100 and 200 => ['saba', 'nafchigar', 'ali', 'biglari', 'reeraa', 'bigchi']

// result.push(firstArray.concat(secondArray,thirdArray))
// console.log(result); //[100, 200, Array(6)] => 2d array

// result.push(result.concat(firstArray,secondArray,thirdArray))
// console.log(result);//[100, 200, Array(8)]

// result.splice(0,2)
// console.log(result);//[Array(8)]

console.log(result);
for(let i = 0 ; i < firstArray.length ; i++){
    result.push(firstArray[i])
}
for(let i = 0 ; i < secondArray.length ; i++){
    result.push(secondArray[i])
}
for(let i = 0 ; i < thirdArray.length ; i++){
    result.push(thirdArray[i])
}
console.log(result);

// array to array => should use for loop 