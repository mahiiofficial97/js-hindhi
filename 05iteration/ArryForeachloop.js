const coding=["java","javascript",".net"]

//arry call back function
// coding.forEach((item)=>{
// console.log(item);
// })

// function printname(print)
// {
//   console.log(print);
// }

// coding.forEach(printname)

coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})
//aryy insilde multoiplle object
const mycoding=[
  {
    langgename:"javascriopt",
    lanfilename:"js"
  },{
    langgename:"java",
    lanfilename:"java"
  },
  {langgename:".net",
  lanfilename:"net"}
  
]
mycoding.forEach((item)=>
{
  
  //console.log(item);
  console.log("name===="+item.langgename)
})
