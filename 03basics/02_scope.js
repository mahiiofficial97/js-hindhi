//scopes in the java scripts 

let a=30;
if(true)
{
    
let a=10;
const b=20;
var c=30;
console.log("inner="+a); //inner value will be same as 10 bbut outside the block global value of the a will be 30 not =changed


}
console.log(`outer =${a}`);

//console.log(a); those 2 value will not be printente beacuse global scope
//console.log(b);
console.log(c); //var will print oustside due to the block scope issue thats why var is not safe



