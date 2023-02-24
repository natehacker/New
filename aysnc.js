let a = 1
let b = 2
setTimeout(function(){
    console.log("aysnc")
},1000)

console.log("synchronous")

console.log(a)
console.log(b)