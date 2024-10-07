const clock = document.getElementById("clock");

//const clock=document.querySelector("#clock")

//normal function time of 24 houre

// setInterval(function () {
//   let date = new Date();
//   //console.log(date.toLocalTimeString);

//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

//12 houre timing

//const clock = document.getElementById("clock");

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString("en-US", { hour12: true });
}, 1000);
