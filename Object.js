//object => mutable ... can change data , add or delete
// key : value

let data = {
    firstName : "saba",
    secondName : "nafchigar",
    age : 31,
    flag : true,
    test : null
}
console.log(data);
console.log(typeof data);

data.ignore=100 // add data
console.log(data);

let slider ={
    id:1,
    caption:"this is test",
    image : "test.jpg",
    publish:0
}

//second way to create object:
let person =Object({
    firstName : "ali",
    secondName : "biglari",
    age : 37,
    flag : false,
    test : null
})
console.log(person);
console.log(typeof person);