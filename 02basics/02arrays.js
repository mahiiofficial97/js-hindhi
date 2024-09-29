const marvel_heros=["thor","ironman","spiderman"]
const dcheros=["batman","antman","saktiman"]

marvel_heros.push(dcheros) //not recomoned method because of arry 
//not comin in single arry comin arry in under another arry
console.log(marvel_heros);
console.log(marvel_heros[2]);//print. =>spiderman
console.log(marvel_heros[2]);//print hole dcheros

                   //solution for that 

                  const allheroes= marvel_heros.concat(dcheros)
                   console.log("concate "+allheroes);

        const allnewheroesconcateing=[...marvel_heros, ...dcheros]
        console.log("all new heroes="+allnewheroesconcateing);
                   
           //arryinside arry
           
           const another_ary=[1,2,4,[456],[45,5,[5,67,[78]]]]
           const realanotherarry=another_ary.flat(Infinity)
           console.log(realanotherarry);


        console.log(Array.isArray("mahesh"));//true or fasle
        console.log(Array.from("mahesh"));//convert string in character like 'm','a'h etc
        
        let scroe1=100;
        let scroe2=100;
        let scroe3=100;

//all emement n the single Array 
        console.log(Array.of(scroe1,scroe2,scroe3));
        
        
        
           

