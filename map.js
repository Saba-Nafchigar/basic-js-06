//یکی از راههای ساخت ارایه به صورت دیپ کپی => map()
//خروجی map() => یک ارایه است
let data = ["saba","nafchigar",31,"sabanafchigar@gmail.com"]
let result = data.map((elem)=>{
    return elem
})
console.log(result); //  ['saba', 'nafchigar', 31, 'sabanafchigar@gmail.com']


result.push("last")
console.log(result) //  ['saba', 'nafchigar', 31, 'sabanafchigar@gmail.com', 'last']
console.log(data); //  ['saba', 'nafchigar', 31, 'sabanafchigar@gmail.com']

//map and foreach use in react
//foreach => print data (void)
//map => return data or make array