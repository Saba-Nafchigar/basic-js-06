//foreach => void function - print 

let data = ["saba","nafchigar",31,"sabanafchigar@gmail.com"]
data.forEach(function(item , index , array){
    console.log(item , index , array);    
})

let person =["saba" , "ali" , "sara" , "turaj"]
person.forEach(function(item){
    if(item ==="ali"){
        console.log("yes!");
    }else{
        console.log(item+25);
    }
})

let myArray = ["saba" , "ali" , "sara" , "turaj" , "samiye"]
myArray.forEach(function(elem,index){
    myArray[index]=elem + "---:D"
})
console.log(myArray); // ['saba---:D', 'ali---:D', 'sara---:D', 'turaj---:D', 'samiye---:D']


let newArray = ["saba" , "ali" , "sara" , "turaj"]
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]+"---:D");
}