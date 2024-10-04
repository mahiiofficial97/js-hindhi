const myObj={
  js:"javascript",
  cpp:'c++',
  rb:"rubby"
}
// for (const key in myObj) {

//     console.log(key);//op will get key
// }

for (const key in myObj) {
  console.log(`${key} = ${myObj[key]}`);
}
// for object printing we have to use only forIn loop
//for printing key and value
 
// const map1 = new Map();

// map1.set('a', 1);
// map1.set('c', 3);
// map1.set('b', 2);
// map1.set('c', 3);
// console.log("///////////////");
// for (const key in map1) {
//   console.log(key);
// }
//not print anyting because map is not iteeratable



