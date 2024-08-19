 //1) Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// let num;
//  function int(num)
// {
//     if(num%2===0)
//     {console.log("even")}
//     else{console.log("odd")}
// }
// int(10);
// ---------------------------


//2) You get an array of numbers, return the sum of all of the positives ones.
// const numbers = [5, 5, 10,5,-1];
// function sum(total,num){
//     if(num>0){
//        return total+num ; 
//     }
//     else{return total+0;}
// }
// let result=numbers.reduce(sum);
// console.log(result);
// ------------------------
    


//3) Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! )

// let arr= [3, 1, 9, 7, 8, 5];
// function sum(total,num){
//     let x=Math.min(...arr);
//     let y=Math.max(...arr);
//     if(num>x && num<y)
//     {
//     return num+total;
//     }
//     else{
//         return total+0;
//     }
// }
// let result=arr.reduce(sum);
// console.log(result);


//4)String-repeat  ==> Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function rep(n,s){
//     if(n > 0){
//     return s.repeat(n);
//     }
//     else{
//     return "";
//     }
// }
// console.log(rep(6,"asd"));



  //5)Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 
// let x=531642;
// let y=x.toString();
// let z=y.split("")
// let arr=z.sort();
// let newarr=arr.reverse();
// let thenew=newarr.map(Number);

// let newest=thenew.join('');
// console.log(typeof(newest));
