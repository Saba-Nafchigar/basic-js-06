let data = [
    {brand:"asus",price:"2900$"},
    {brand:"hp",price:"2300$"},
    {brand:"msi",price:"2000$"}
]
let result = data.findIndex((elem)=>{
    return elem.brand==="asus"

})
console.log(result); //0