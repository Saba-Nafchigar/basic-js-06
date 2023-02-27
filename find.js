// find => first element

let laptop = [
    {brand:"asus", price:"2000$"},
    {brand:"asus", price:"1000$"},
    {brand:"asus", price:"1200$"},
    {brand:"asus", price:"1900$"},
    {brand:"asus", price:"2200$"}
]
let asus = laptop.find((elem)=>{
    return elem.brand==="asus"
})

console.log(asus);

let numbers = [1,2,3,4,5]

let printNumber = numbers.find((elem,index)=>{
    console.log(elem===5 , index);
})

console.log(printNumber); 
