console.log("numberstarting");

const balance=400;
const currentbalance=new Number(100)
console.log(currentbalance);

console.log(currentbalance.toString())
console.log(currentbalance.toString().length)

console.log(currentbalance.toFixed(2))// for use of pricison value after decimal what we want how many decimal if we put 1 the 1 decimal will come as a pricision value

const othernumber=678.787
console.log(othernumber.toPrecision(3));
const hundredd=10000000
console.log(hundredd.toLocaleString('en-IN'));//change diigit in coma ,


////maths ...............
console.log("//////////////////////////");

console.log(Math.random());
console.log("rondfigure value ="+Math.round(5.4));
console.log(Math.min(1,2,3,3,4,5,6));
console.log(Math.max(3,1,23,4,7,56,7,9));
console.log("small value"+Math.floor(4.9));
console.log("bg value  "+Math.ceil(4.9));
console.log(Math.abs(-8));

console.log("randomnumber below 1 ="+Math.random()*10+1);


const 
min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

