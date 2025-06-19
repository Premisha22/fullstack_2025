//spread operator(...)
var arr = [1,2,3];
var arr2 = [...arr,4];
console.log(arr);
console.log(arr2);
//destruturing operator
var marks=[97,98,99,96,95];
var [m1,m2,m3,m4,m5] = marks;
console.log(m5);
console.log(m1);
console.log(m4);
console.log(m2);
console.log(m3);
//callBack
function demo(){
    console.log("hello")
}
var callBack=(func)=>{
    console.log("hiii")
    func();
    
}
callBack(demo)
//map
var arr = [10,20,30,40,50];
var double = arr.map(num=>num*2)
console.log(double)
//filter
var arr = [1,2,3,4,5]
var even = arr.filter(num =>num%2==0)
console.log(even)
//reduce (add all num in array)
var total = arr.reduce((val,num)=>val+num,0)
console.log(total)
//map,filter,reduce
var result = arr.map(num => num * 2).filter(num => num > 5).reduce((val,num) => val + num,0)
console.log(result)

var details = async () =>{
    var response = await fetch('https://dummyjson.com/users')
    var users = await response.json();
    console.log(users)
}
details();