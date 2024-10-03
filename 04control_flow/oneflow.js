// console.log("hello");
// //in this session we are starting the series of conditional statment if else else if else switchall statment

// const islooging=true
// if(islooging)
// {
//   console.log("login successfully");
// }


// // if-else
// const validnumber = 3;
// if (validnumber > 5) {
//   console.log("Number is valid");
// } else {
//   console.log("Number is not valid");
// }

// // else-if else
// let age = 25;

// if (age < 18) {
//   console.log("You are not eligible to vote");
// } else if (age === 21) {
//   console.log("You are going to be eligible for voting soon");
// } else if (age === 25) {
//   console.log("You are eligible for voting");
// } else if (age > 90) {
//   console.log("You are over-eligible for voting");
// } else {
//   console.log("You are eligible for voting");
// }


//== is uded to check value === is used to check value and refrece

///here is op will correct id wth == operator
let id=5
if(id=="5")
{
  console.log("correct id");
}else{
  console.log("incorrect id");
}


//here is code coorect we put string with equal to math number op will incorrect id
let ids=5
if(ids==="5")
{
  console.log("correct id");
}else{
  console.log("incorrect id");
}


// && and || or operator
//&& will take both thing or only one

const emaillogin=true
const otppasswored=false
const googlelogin=true


if(emaillogin && otppasswored)
{
  console.log("you are eligible for login");
}else
{
  console.log("error in login");
}


if(emaillogin || otppasswored)
{
  console.log("you are eligible for login otp based ");
}else
{
  console.log("error in orrr login ");
}


//switch cases

const month=3

switch(month)
{
  case 1:
    console.log("jan");
    break;

    case 2:
      console.log("feb");
    break;
    case 3:
      console.log("march");
    break;


    case 3:
      console.log("april");
      break;

    default:

    console.log("invalid montth");
    break;

}

//if we not putted  breeak after a case it willll print hole excuation after break or after ture value like below

const months=2

switch(months)
{
  case 1:
    console.log("jan");
    break;

    case 2:
      console.log("feb");
    break;
    
    case 3:
      console.log("march");
    break;


    case 3:
      console.log("april");
      break;

    default:

    console.log("invalid montth");
    break;

}
 