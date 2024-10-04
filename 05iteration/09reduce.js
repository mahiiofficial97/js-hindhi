const MyNums=[1,2,3,4,5]

const mytotal=MyNums.reduce( (acc,curr)=>{

  //console.log(`acc ${acc} and curr ${curr}`);
  return acc + curr
},0)//accumalotr value here we are set from 0  
//console.log(mytotal);


//write arrow function here mostlu used this
const mytotalvalue=MyNums.reduce((acc,curr)=>acc+curr,0)

console.log(mytotalvalue);


const sopingcart=
[
  {
    itemname:"jscorse",
    price:3444
  },
  {
    itemname:"pythod",
    price:6433
  }
  ,{
    itemname:".net",
    price:8680
  },
  {
    itemname:"java",
    price:1299
  }
]
//total curse price will disply here 
console.log("total course price is ="+sopingcart.reduce((acc,item)=>acc+item.price,0));

