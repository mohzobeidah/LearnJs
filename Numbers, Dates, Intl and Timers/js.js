"use strict"
let x = '23'
console.log(Number(x))
console.log(+(x))

console.log(Number.parseInt(x,10))
console.log(Number.parseInt('23int' ,10))



console.log(Number.parseInt('10',2))
console.log(Number.parseInt('23int' ,10))

console.log(Number.isNaN('10'))
console.log(Number.isNaN(55))
console.log(Number.isNaN('sss'))



console.log(Number.isFinite('10'))
console.log(Number.isFinite(10))
console.log(Number.isInteger(10))
//math 
console.log(Math.sqrt(10))

let y =[5,1,2,3,6]
console.log(Math.max(...y));
console.log(Math.trunc( Math.random()*10));
console.log(Math.ceil(3.5))
console.log(Math.floor(3.5))
console.log(Math.round(3.5))

let random = (min,max)=>Math.trunc(( Math.random()*(max-min))+1)+min;

console.log(random(5,9))
console.log(+(2.3).toFixed(5))



// numeric separator 
console.log(555_000)

// working with big numbers 

console.log(2** 53 -1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(BigInt(5555555555555555555555555555555555))

// date and time 

let date = new Date()
console.log(date)

console.log( new Date(1995,5,5))
console.log( new Date(1995,5,5))


let future = new Date(2023,10,3);

console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(Date.now());
console.log(future.setFullYear(2020));
console.log(Date.now());

/*********DATE CALC******** */

const fut = new Date(1984,3,7)
console.log(+fut)
console.log(+'2')
let calDayPass =(date1 , date2)=>(date2-date1)/(1000*60*60*24);

console.log(calDayPass(new Date(1984,3,7) , new Date(1984,3,15)))
// localization date 
const option ={
 year :"numeric",
 day :"numeric"
}
console.log(new Intl.DateTimeFormat("en-US", option).format(new Date()))
console.log(new Intl.DateTimeFormat("ar-SY",option).format(new Date()))

const option3 = {
    style:"currency",
    currency:"USD"
}
console.log(new Intl.NumberFormat("ar-SY", option3).format(1))

