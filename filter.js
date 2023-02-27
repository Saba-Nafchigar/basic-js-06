//filter() => return

let data=[1,22,3,4,15,52]
let result = data.filter((elem)=>{
    return elem>13
})
console.log(data);
console.log(result);

let person = [
    {firstName:"saba" , lastName:"nafchigar" , age:31},
    {firstName:"ali" , lastName:"biglari" , age:37},
    {firstName:"turaj" , lastName:"armin" , age:35}
]

let print = person.filter((elem)=>{
    return elem.age>31
})
console.log(print);

let laptop = [
    {brand:"asus", price:"2000$"},
    {brand:"lenovo", price:"1000$"},
    {brand:"acer",price:"1200$"},
    {brand:"hp", price:"1900$"},
    {brand:"dell",price:"2200$"}
]
let cheap = laptop.filter((elem)=>{
    return elem.price<"2000$" || elem.brand==="dell"
})

console.log(cheap);