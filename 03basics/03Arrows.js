 function chai()
 {
    console.log(this);
    
 }
 chai()
 //arrows function like is=  ()=>{}

    const user={
        username:"mahesh",
        welcomeuser()
        {
            console.log(`${ this.username } welcome to website`); //in the example this keyword is reffer to current context
            console.log(this);//this will print all current context
            
        }
    }
user.welcomeuser()
user.username="sam" //. here we change the username 
user.welcomeuser()

//functin using this. 
// function chaiwala()
// {
//     let username="maheshhande"
//     console.log(this.username);
    
// }
// chaiwala()//this is use only for object not in the function


// const chaiwala = () =>
// {
//     let username="maheshji"
//     console.log(this.username);
    
// }

// chaiwala()//output undefied 


const addtwo=(num1,num2) =>{

    return num1+num2      //when we use return the print the result in the bottom. 
}

console.log(addtwo(600,700));

//second part of the arroe function is

const addthree=(num1,num2,num3)=>(1,2,3) //this function is called implicit return 

console.log(addthree());

//**imp like when you use curly braces then use return ====when you use paranthesis then dont use return simple......... */
//when we use return object in arrow function then
const addthreee=()=>({name:" maheshji",id:45})
const{name}=addthreee()
console.log(`your name is =${name}`);


//print all object
const fullobject=addthreee() //destructre object
console.log("full object ",fullobject);


