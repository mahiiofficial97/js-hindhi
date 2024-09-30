//Objects
 
//2 types of object declaring ,2-literal 3- constructor,1-singltone  

 

 

Object.create//this is called constructor object create 

//object literals 

 

 

//declaring symbol symbol are use for unique object 

const mySym=Symbol("key1")  

 

const jsuser= 

{ 

 

[mySym]:"mykey1", 

name:"mahesh", 

"full name":"mahesh hande", 

age:28, 

email:"mahesh@google.com", 

islogged:false, 

lastloggendin:["monday ","friday"] 

 

} 

//in the object we shoud jave give the value in key and pair 

console.log(jsuser); 

//there are 2 way to print the object  

//1 st is the .method  

 

console.log(jsuser.email); 

//console.log(jsuser.full name);//if we use . with the string vaiable then we cant acces that value 

 

//and secod is arry 

console.log(jsuser["email"]);//but in this method we shoud give the email in string 

 

 

//printin symbol 

console.log(typeof jsuser.mySym);//printing this datatype will be String 

console.log( jsuser[mySym]);//if we want tu use as a symbole then use squre bracket to key 

 

 

//changing the value of object 

jsuser.email="mahesh@gmail.com" 

console.log(jsuser); 

 

//but we don't wanta change the field then we use freeeze 

//Object.freeze(jsuser)  

jsuser.email="maheshhande@gmail.com" 

console.log(jsuser); 

 

//use function inside of object 

 

jsuser.greetings=function() 

{ 

console.log("hello mahiii greeting"); 

} 

console.log(jsuser.greetings); //which will print undefiend and function (anynomus)means function is excucate but not return 

console.log(jsuser.greetings());//shoeing error greeting is not function right now due to object freez above  

 

//second function with printing objevt name 

jsuser.greeting2=function() 

{ 

console.log(`gretting from object 2, ${this["full name"]}`); 

} 

console.log(jsuser.greeting2()); 

 

//NOte** most of the time for vale acces we use . but in some cases we use squre bracaket 