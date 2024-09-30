//function 
//function is a all code in pacakge
function myname(name)
{
 console.log("my name is mahesh"+name);
 
}
myname("mahesh")

//printing multiple thing in a function which is aclllled 

function printingname()
{
console.log("m");
console.log("a");
console.log("h");
console.log("e");
console.log("s");
console.log("h");
}

printingname()

// in above example function=>function, printingname=>function name,printingname()=>function refrence

function addtwonumber(number1,number2)//called parameters
{
    //return console.log(`number is= ${number1+number2}`);
    console.log(number1+number2);
    
    //return number1+number2

    
    
}
addtwonumber(1,2)
//console.log(addtwonumber(2,3));//Aurguments

function loginusermessage(username)
{
    if(username==undefined)
    {
        return `please enter your user name`
        //return console.log("please enter username");
        
    }else
    {
        return`usrname is ${username}`
    }
        
}

console.log(loginusermessage());



function loginusermessagee(username="sam")//we can pass the bydefault username
{
    if(username==undefined)
    {
        return `please enter your user name`
        //return console.log("please enter username");
        
    }else
    {
        return`usrname is ${username}`
    }
        
}

console.log(loginusermessagee());



//when we dont know the how many. values coming the we use ...=>called as restoperator
  function calculateprice(...no)//restoperator
  {
    return `values are= ${no}`
  }
console.log(  calculateprice(10,23,89,87));

//for object dont know the value how to pass object value in function

let user={
    username:"mahesh",
    price:200,
    mobilenumber:200
}

//making one function for handle user

function handleuser(anyobject)
{
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
    
}
//handleuser(user).  we can pass directly object here also 2nd method 

handleuser(
    {
    username:"mahesh",
    price:2090,
    mobilenumber:200
    }
)
  
// arry pass in function
const mynewarry=[1,200000000,3,4]

function returnsecondvalue(getarry)
{
    return getarry[1]
}
console.log(returnsecondvalue(mynewarry));
// second method to print ARRAY

console.log(returnsecondvalue([1,7677,3,4,5]));
