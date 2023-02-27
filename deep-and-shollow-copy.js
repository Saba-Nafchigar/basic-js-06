// deep copy : use [...array name] , or array.from() or concat

// deep copy : 
let data = ["saba","biglari",31,true,null,20.2]
let result = [1,2,3,4]
let x=[10,20,30]
let test = data.concat(result,x) //i can use concat() for make new array ---also i can pass an array to concat
console.log(test); // ["saba","biglari",31,true,null,20.2,1,2,3,4,10,20,30]
console.log(data); // ["saba","biglari",31,true,null,20.2]
test.push("last")
console.log(test); // ["saba","biglari",31,true,null,20.2,1,2,3,4,10,20,30,"last"]


//shallow copy : 
let data2=["ali","biglari",37]
let result2=data2
console.log(result2); //["ali","biglari",37]
console.log(data2); //["ali","biglari",37]
result2.push("saba")
console.log(result2);//["ali","biglari",37,"saba"]
console.log(data2);//["ali","biglari",37,"saba"]