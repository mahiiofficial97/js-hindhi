console.log("hello");

//in the arry we can put multiple objects
const myarry=[{},{},{}]
//for of loop
const arr=[1,2,3,4,5]
for (const num of arr) {
  console.log(num);
}
const greeting="hello mahesh"

for (const val of greeting) {
  console.log(val);
}
//maps

const map1 = new Map();

map1.set('a', 1);
map1.set('c', 3);
map1.set('b', 2);
map1.set('c', 3);

//printing only key 
for (const mahii of map1) {
  console.log(mahii);
}
//printing in map key and value
for (const [key,value] of map1) {
  console.log(key,` = `,value);
}


console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

console.log(map1);


// const myobj={
//   game1:"mahiigame",
//   game2:"chaigame"
// }
// for (const [key,value] of myobj) {
//   console.log(key,`=`,value);//giving errro heree
// }



