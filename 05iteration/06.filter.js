// const coding=["js","java","python","cpp"]
// //call back function
// coding.forEach( (item)=>(console.log(item)));

// const values=coding.forEach( (item)=>(console.log(item)));
// console.log(values);//undefiend op==

//use filter
const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newnums=mynum.filter( (num) => num>4)
// console.log(newnums);


//when you use object then you have to give the return kryword in it
// const newnum1=mynum.filter((num)=>{return num<5})
// console.log(newnum1);

//emtpy arrry will return 
const newnum1=mynum.filter((num)=>{num<5})
//console.log(newnum1);

const newnums=[]

mynum.forEach( (num)=>{
  if(num>4)
  {
    newnums.push(num)
  }
  })

  //console.log(newnums); 
//example of book use filter map redue all function in below arryobject

const books=[
  {
    title:'book 1',genre:'fiction',publish:1998,edition:2004
  },
  {
    title:'book 1',genre:'science',publish:1989,edition:2015
  },
  {
    title:'book 1',genre:'histroy',publish:1990,edition:2004
  },{
    title:'book 1',genre:'fiction',publish:1961,edition:2204
  },
  {
    title:'book 2',genre:'non-fiction',publish:1987,edition:2012
  }
]
// const userbooks=books.filter((book)=>book.genre=='histroy' )
// console.log(userbooks);

const userbooks=books.filter((bk) => { return bk.genre ==='fiction' && bk.edition >1897}) 

console.log(userbooks);




