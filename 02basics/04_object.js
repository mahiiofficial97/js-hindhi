//creating object  2 typpe singleton object 2-non singleton object

const singletonboj=new Object()
singletonboj.id=1;
singletonboj.name="mahesh"
//console.log(singletonboj);

//          
const tinderuser={}
tinderuser.id=1;
tinderuser.name="mahiis";

const nonsingletonobj={id:1,name:"mhii"}
// console.log(nonsingletonobj);

const regularname={
    emial:"m@gmail.com",
    fullname:{
        usersname:{
            firstbame:"mahesh",
            lastname:"hande"
        }
    }
}
//above calle merged arry or nested arry
console.log(regularname);
console.log(regularname.fullname);
console.log(regularname.fullname.usersname);

const obj1 = { 1: "aa", 2: "bb" };
const obj2 = { 1: "aaaa", 2: "bbbbb" };
const obj3 = { 1: "a", 2: "b" };
const obj4 = [obj1, obj2, obj3];
console.log("///////////////");
console.log(obj4); 
console.log("///////////////");

// Output: [ { 1: 'aa', 2: 'bb' }, { 1: 'aaaa', 2: 'bbbbb' }, { 1: 'a', 2: 'b' } ]

const obj6 = Object.assign({}, obj1, obj2, obj3);
//console.log(obj6); 
// Output: { 1: 'a', 2: 'b' } (obj3 overwrites obj1 and obj2)

const objects = { ...obj1, ...obj2 };
//console.log(objects); 
// Output: { 1: 'aaaa', 2: 'bbbbb' } (obj2 overwrites obj1)

const users =[
    {
        id:1,
        email:"mh@gmail.com"
    },
    {
        name:"mahesh",
        number:9876543
    }
]
console.log(users[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));//get key 
console.log(Object.values(tinderuser)); //get value
console.log(Object.entries(tinderuser));//coming arry ke under array


console.log(tinderuser.hasOwnProperty("mahiis"));//check the property present or not








