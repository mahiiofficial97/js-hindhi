let i=0;
for(let i=0;i<10;i++)
{
  console.log(i);
}


//break and continue keyword in loops
let no=0;
for( no =1;no<20;no++)
{
  if(no==5)
  {
  console.log("print 5 number");
  break
  }
  console.log(no);
}

let newnumber=0;
for(let no =1;no<20;no++)
{
  if(no==5)
  {
  console.log("print 5 number");
  continue
  }
  console.log(no);
}

//inner loop outer loop

for(let i=0;i<10;i++)
{
  console.log("table of "+i);
    for(let j=0;j<10;j++)
    {
      console.log(`${i}*${j} =${i*j}`);
    } 
}