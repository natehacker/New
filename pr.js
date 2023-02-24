let p = new Promise ((resolve,reject)=>{
let a = 1+2
if(a ==2){
    resolve("sucess")
}else {
        reject("failed")
    }
})
p.then((message)=>{
    console.log("this is in the " + message)
}).catch((message)=>{
    console.log("this is the catch" + message)
})



function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
  }
  
  function logQuote(quote){
    console.log(quote);
  }
  
  createQuote("eat your vegetables!", logQuote); 
  
