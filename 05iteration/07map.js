const mynuber=[1,2,3,4,5,6,6,7,8,9,10]

//console.log(mynuber.map((num)=>num+1));
const nenums=mynuber.map((num)=>num+1)
//console.log(nenums) 

const mynumber=mynuber
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=22)

console.log(mynumber);