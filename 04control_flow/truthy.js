//truthy or fasle value

const useremail=[]
if(useremail)
{
  console.log("get user email");
}else{
  console.log("dont have user email");
}

//if coming arrry how to check empty or not
if(useremail.length===0)
{
  console.log("get user email");
}else{
  console.log("dont have user email");
}

//check empty object
const emptyObject={}
if(Object.keys(emptyObject).length===0)
{
  console.log("objevct is empty");
}else{
  console.log("dont have user email");
}

//falsy value
//undefiened ,null,0,-0,BigInt,"",NaN

//falsy value
//"0",'flase'," ",[],{},function(){}

//imp   ******  Nullish Coalescing operator (??) :undefiend */

let val;
// val=5 ??10
// val=null??10
val=undefined??10??15

console.log(val);

//if we dont want to take nulll value that time we  use


//**       terniary Operator */

//condition ?true:false


const iceprice=80
iceprice<=80 ? console.log("less price than 80 "):console.log("ice price is more ");;