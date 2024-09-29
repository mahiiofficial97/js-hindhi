//arrays
const myarry=[1,2,3,4,5,6,7] 
const difrentt=["mahii",'y',66,90.0]

console.log(myarry[4]);

console.log(myarry)
console.log(difrentt)

//making arry another type

const secondndtype=new Array(1,2,3,4,5)
console.log(secondndtype);

const arry=[10,11,12,13]
arry.push(7,8)//push method add some elemnt in arry
console.log(arry);
arry.pop()
arry.pop()
arry.pop()


console.log(arry);
arry.unshift(7)//add the number in first line
arry.unshift(6,7)
console.log("unshifts"+arry);
arry.shift()  //remove number of first 

console.log("shift ="+arry);
console.log(
arry.includes(9));


const newarry=arry.join() //this method convert all arry type in string


console.log( typeof newarry);
// slice or splice
console.log("A ",arry);

const myn1=arry.slice(1,4)//slice 1 index se lekar  index tak number print karegi 4 nahi
console.log(myn1);

console.log("b ",arry);

const myn2=arry.splice(1,4) //splice 1index se lekar 4 index tak number print karegi
console.log("c ",arry);
console.log(myn2);

 




