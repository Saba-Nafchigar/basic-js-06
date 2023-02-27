let data = [10 , 5 , 2 , 26 , 100]
console.log(data);
data.sort(function(a,b){return a-b}).reverse() //[100, 26, 10, 5, 2]
console.log(data);

let test = ["saba","ali","turaj"]
console.log(test);
test.sort() //['ali', 'saba', 'turaj']
test.sort()

//sort for numbers => with arguments => sort(function(a,b){return a-b})
//sort for strings => no arguments => sort()

let numstr = ["saba","ali","turaj" , null , 12 , 58 , true]
numstr.sort()
console.log(numstr); //[12, 58, 'ali', null, 'saba', true, 'turaj']
