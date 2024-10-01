//immediately Invoked Function Expression (IEFE)


//it is mostly used for immediately  return function  put all function in parathensis

//simple function

const simplefunction=function maheshji()
{
    console.log(username="mahesh");
    
}
console.log(simplefunction());


(function chai()
{
    console.log(`db connected`);
    
})() ;  //this is called as implicitly

(function secodchai()
{
    console.log(`db connected twise`);
    
})() ;//if i remove the semicolon here then error will come in next function //immediately Invoked Function Expression (IEFE)
//if we put the 2  (IEFE) function then first retrn use the semicoln (;)

((name)=>{
    console.log(`name is my  heros like ${name}`);
    
})("maheshhande sir")


