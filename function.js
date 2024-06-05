// // Write a JavaScript function that reverses a number.
// function reversenumber(){
//     x = prompt(" Enter any number ")
//     n = n + "" ;
//     return x.split("").reverse().join();
// }

// console.log(reversenumber(31293));

// // Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console .

// for(var i = 0 ; i<=15 ; i++){
//     if (i % 2 == 0 ){
//         console.log(i + " Even Number")
//     }
//     else{
//         console.log(i + " Odd Number")
//     }
// }

// function orderalphapit( ){
//     str = prompt(" Enter any word to order it  : ")
//     str = str.toLowerCase() ; 
    
//     return str.split("").sort().join("");
// }
// console.log(orderalphapit()) ;

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
// var z = prompt("Enter any Number : ");


// z = z.split('')
// for(let counter = 0 ; counter <= z.length ; counter++ ){
    

//     if(parseInt(z[counter] % 2 == 0 &&  z[counter++]) % 2 == 0){
//         z[counter] = '-' + z[counter] 
//         let result = z.join('');
//         console.log(result) ;
//     }
   

// }

//Write a function (Agechecker) that checks age of the user if the age is larger than or equal 18, the output will be ( The user is Adult ) else ( The user is Minor) 
function Agechecker(age){
    age = prompt("Enter your age :")
   
    var age = age >= 18 ?  console.log("The user is Adult"):console.log("The user is Minor")


    
}
Agechecker()

